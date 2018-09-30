import * as utf8 from './utf8';

/**
 * 空函数
 *
 * @returns {undefined}
 */
function noop() {
    // empty
}

/**
 * 写一个byte到buffer
 *
 * @param {number} value 要写入的值
 * @param {Uint8Array} buffer 被写入的buffer
 * @param {number} pos 写入位置
 * @returns {undefined}
 */
function writeByte(value, buffer, pos) {
    buffer[pos] = value & 255;
}

/**
 * 写一段buffer到buffer
 *
 * @param {Uint8Array} value 要写入的子buffer
 * @param {Uint8Array} buffer 被写入的buffer
 * @param {number} pos 写入位置
 * @returns {undefined}
 */
function writeBytes(value, buffer, pos) {
    buffer.set(value, pos);
}

/**
 * 写入一个变长的负数到buffer
 *
 * @param {number} value 要写入的值
 * @param {Uint8Array} buffer 被写入的buffer
 * @param {number} pos 写入位置
 * @returns {undefined}
 */
function writeVarint64(value, buffer, pos) {
    let _pos = pos;

    while (value.hi) {
        buffer[_pos++] = value.lo & 127 | 128;
        value.lo = (value.lo >>> 7 | value.hi << 25) >>> 0;
        value.hi >>>= 7;
    }
    while (value.lo > 127) {
        buffer[_pos++] = value.lo & 127 | 128;
        value.lo = value.lo >>> 7;
    }
    buffer[_pos++] = value.lo;
}

/**
 * 模拟64位数字，处理超过uint32的情况
 *
 * @class LongBits
 */
class LongBits {
    /**
     * Creates an instance of LongBits.
     * @param {number} lo 低32位值
     * @param {number} hi 高32位值
     * @memberof LongBits
     */
    constructor(lo, hi) {
        this.lo = lo >>> 0;
        this.hi = hi >>> 0;
    }

    /**
     * 根据value创建一个LongBits
     *
     * @static
     * @param {number} value 要转换的值
     * @returns {LongBits} LongBits实例
     * @memberof LongBits
     */
    static fromNumber(value) {
        let _value = value;
        const sign = _value < 0;

        if (sign)
            _value = -_value;

        let lo = _value >>> 0;
        let hi = (_value - lo) / 4294967296 >>> 0;

        if (sign) {
            hi = ~hi >>> 0;
            lo = ~lo >>> 0;
            if (++lo > 4294967295) {
                lo = 0;
                if (++hi > 4294967295)
                    hi = 0;
            }
        }

        return new LongBits(lo, hi);
    }
}

/**
 * 写入值到buffer的操作
 *
 * @class Op
 */
class Op {
    /**
     * Creates an instance of Op.
     * @param {function} fn 具体的操作函数
     * @param {number} len 长度
     * @param {number} value 具体的值
     * @memberof Op
     */
    constructor(fn, len, value) {
        this.fn = fn;
        this.len = len;
        this.value = value;
        this.next = null;
    }
}

/**
 * 写入一个变长编码值的操作
 *
 * @class VarintOp
 * @extends {Op}
 */
class VarintOp extends Op {
    /**
     * Creates an instance of VarintOp.
     * @param {number} len 长度
     * @param {number} value 具体的值
     * @memberof VarintOp
     */
    constructor(len, value) {
        super();

        this.len = len;
        this.value = value;
        this.next = null;

        this.fn = function writeVarint32(value, buffer, pos) {
            let _value = value;
            let _pos = pos;

            while (_value > 127) {
                buffer[_pos++] = _value & 127 | 128;
                _value >>>= 7;
            }
            buffer[_pos] = _value;
        };
    }
}

/**
 * 状态
 *
 * @class State
 */
class State {
    /**
     * Creates an instance of State.
     * @param {Writer} writer Writer实例
     * @memberof State
     */
    constructor(writer) {
        this.head = writer.head;
        this.tail = writer.tail;
        this.len = writer.len;
        this.next = writer.states;
    }
}

/**
 * 编码类
 *
 * @export
 * @class Writer
 */
export default class Writer {
    /**
     * Creates an instance of Writer.
     * @memberof Writer
     */
    constructor() {
        this.len = 0;
        this.head = new Op(noop, 0, 0);
        this.tail = this.head;
        this.states = null;
    }

    /**
     * 创建Writer实例
     *
     * @static
     * @returns {Writer} Writer实例
     * @memberof Writer
     */
    static create() {
        return new Writer();
    }

    /**
     * 链表
     *
     * @param {function} fn 操作函数
     * @param {number} len 长度
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    _push(fn, len, value) {
        this.tail = this.tail.next = new Op(fn, len, value);
        this.len += len;
        return this;
    }

    /**
     * 写一个uint32到当前位置
     *
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    uint32(value) {
        let _value = value;
        _value = _value >>> 0;

        const op = new VarintOp(
            _value < 128 ? 1
                : _value < 16384 ? 2
                    : _value < 2097152 ? 3
                        : _value < 268435456 ? 4
                            : 5,
            _value);

        this.tail = this.tail.next = op;
        this.len += op.len;

        return this;
    }

    /**
     * 写一个int32到当前位置
     *
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    int32(value) {
        return value < 0
            ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
            : this.uint32(value);
    }

    /**
     * 写一个sint32到当前位置
     *
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    sint32(value) {
        return this.uint32((value << 1 ^ value >> 31) >>> 0);
    }

    /**
     * 写一个bool到当前位置
     *
     * @param {boolean} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    bool(value) {
        return this._push(writeByte, 1, value ? 1 : 0);
    }

    /**
     * 写一段子buffer到当前位置
     *
     * @param {Uint8Array} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    bytes(value) {
        const len = value.len >>> 0;

        if (!len)
            return this._push(writeByte, 1, 0);

        return this.uint32(len)._push(writeBytes, len, value);
    }

    /**
     * 写一串string到当前位置
     *
     * @param {string} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    string(value) {
        const len = utf8.length(value);
        return len
            ? this.uint32(len)._push(utf8.write, len, value)
            : this._push(writeByte, 1, 0);
    }

    /**
     * fork
     *
     * @returns {Writer} this
     * @memberof Writer
     */
    fork() {
        this.states = new State(this);
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
        return this;
    }

    /**
     * reset
     *
     * @returns {Writer} this
     * @memberof Writer
     */
    reset() {
        if (this.states) {
            this.head = this.states.head;
            this.tail = this.states.tail;
            this.len = this.states.len;
            this.states = this.states.next;
        } else {
            this.head = this.tail = new Op(noop, 0, 0);
            this.len = 0;
        }
        return this;
    }

    /**
     * ldelim
     *
     * @returns {Writer} this
     * @memberof Writer
     */
    ldelim() {
        const { head, tail, len } = this;

        this.reset().uint32(len);
        if (len) {
            this.tail.next = head.next; // skip noop
            this.tail = tail;
            this.len += len;
        }
        return this;
    }

    /**
     * 写入结束，开始编码
     *
     * @returns {Uint8Array} 编码结果
     * @memberof Writer
     */
    finish() {
        const buffer = new Uint8Array(this.len);
        let head = this.head.next; // skip noop
        let pos = 0;

        while (head) {
            head.fn(head.value, buffer, pos);
            pos += head.len;
            head = head.next;
        }
        // this.head = this.tail = null;

        return buffer;
    }
}