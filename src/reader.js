import * as utf8 from './utf8';
import LongBits from './longbits';

// 2 ** 32 - 1
const MAX_UINT32 = 4294967295;

/**
 * buffer读取越界错误
 *
 * @param {Reader} reader Reader实例
 * @param {number} writelength 长度
 * @returns {RangeError} 具体错误
 */
function indexOutOfRange(reader, writelength) {
    return RangeError(`protobuf reader index out of range: ${reader.pos} + ${writelength || 1} > ${reader.len}`);
}

function readLongVarint() {
    const bits = new LongBits(0, 0);
    let i = 0;
    if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buffer[this.pos] & 127) << i * 7) >>> 0;
            if (this.buffer[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buffer[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buffer[this.pos] & 127) >> 4) >>> 0;
        if (this.buffer[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buffer[this.pos] & 127) << i * 7) >>> 0;
            if (this.buffer[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buffer[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buffer[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buffer[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buffer[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buffer[this.pos++] < 128)
                return bits;
        }
    }
    throw Error('invalid varint encoding');
}

/**
 * 解码类
 *
 * @export
 * @class Reader
 */
export default class Reader {
    /**
     * Creates an instance of Reader.
     * @param {Uint8Array} buffer 原始buffer
     * @memberof Reader
     */
    constructor(buffer) {
        this.buffer = buffer;
        this.pos = 0;
        this.len = buffer.length;
    }

    /**
     * 创建Reader实例
     *
     * @static
     * @param {Uint8Array} buffer 原始buffer
     * @returns {Reader} Reader实例
     * @memberof Reader
     */
    static create(buffer) {
        return new Reader(buffer);
    }

    /**
     * 从当前位置读一个uint32
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */
    uint32() {
        let value = MAX_UINT32;

        value = (this.buffer[this.pos] & 127) >>> 0; if (this.buffer[this.pos++] < 128) return value;
        value = (value | (this.buffer[this.pos] & 127) << 7) >>> 0; if (this.buffer[this.pos++] < 128) return value;
        value = (value | (this.buffer[this.pos] & 127) << 14) >>> 0; if (this.buffer[this.pos++] < 128) return value;
        value = (value | (this.buffer[this.pos] & 127) << 21) >>> 0; if (this.buffer[this.pos++] < 128) return value;
        value = (value | (this.buffer[this.pos] & 15) << 28) >>> 0; if (this.buffer[this.pos++] < 128) return value;

        this.pos += 5;
        if (this.pos > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    }

    /**
     * 从当前位置读一个int32
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */
    int32() {
        return this.uint32() | 0;
    }

    /**
     * 从当前位置读一个suint32
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */
    sint32() {
        const value = this.uint32();
        return value >>> 1 ^ -(value & 1) | 0;
    }

    /**
     * 从当前位置读一个uint64
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */
    uint64() {
        return readLongVarint.call(this).toNumber(true);
    }

    /**
     * 从当前位置读一个int64
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */
    int64() {
        return readLongVarint.call(this).toNumber(false);
    }

    /**
     * 从当前位置读一个bool
     *
     * @returns {boolean} 读取结果
     * @memberof Reader
     */
    bool() {
        return this.uint32() !== 0;
    }

    /**
     * 从当前位置读一段buffer
     *
     * @returns {Uint8Array} 读取结果
     * @memberof Reader
     */
    bytes() {
        const len = this.uint32();
        const start = this.pos;
        const end = this.pos + len;

        if (end > this.len)
            throw indexOutOfRange(this, len);

        this.pos = end;

        // 用subarray而不是slice，防止原数组被意外修改
        return this.buffer.subarray(start, end);
    }

    string() {
        const bytes = this.bytes();
        return utf8.read(bytes, 0, bytes.length);
    }

    /**
     * 跳过一段长度
     *
     * @param {number} len 跳过的字节数
     * @returns {Reader} this
     * @memberof Reader
     */
    skip(len) {
        if (typeof len === 'number') {
            if (this.pos + len > this.len)
                throw indexOutOfRange(this, len);
            this.pos += len;
        } else {
            do {
                if (this.pos >= this.len)
                    throw indexOutOfRange(this);
            } while (this.buffer[this.pos++] & 128);
        }
        return this;
    }

    /**
     * 跳过一种类型
     *
     * @param {number} wireType 跳过的类型
     * @returns {Reader} this
     * @memberof Reader
     */
    skipType(wireType) {
        switch (wireType) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3: {
                let _wireType = this.uint32() & 7;
                while (_wireType !== 4) {
                    this.skipType(_wireType);
                    _wireType = this.uint32() & 7;
                }
                break;
            }
            case 5:
                this.skip(4);
                break;

            default:
                throw Error(`invalid wire type ${wireType} at offset ${this.pos}`);
        }
        return this;
    }
}