(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],2:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],3:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],4:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],5:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":8}],6:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],7:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":9,"./assertThisInitialized":1}],8:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],9:[function(require,module,exports){
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],10:[function(require,module,exports){
'use strict';
/**
 * 计算utf8编码的字符串长度
 *
 * @exports
 * @param {string} string 要计算的字符串
 * @returns {number} 长度
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function length(string) {
  let len = 0;
  let c = 0;

  for (let i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;else if (c < 2048) len += 2;else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
      ++i;
      len += 4;
    } else len += 3;
  }

  return len;
}
/**
 * Reads UTF8 bytes as a string.
 * @exports
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */


function read(buffer, start, end) {
  let _start = start;
  const len = end - _start;
  if (len < 1) return '';
  let parts = null;
  const chunk = [];
  let i = 0; // char offset

  let t = null; // temporary

  while (_start < end) {
    t = buffer[_start++];
    if (t < 128) chunk[i++] = t;else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[_start++] & 63;else if (t > 239 && t < 365) {
      t = ((t & 7) << 18 | (buffer[_start++] & 63) << 12 | (buffer[_start++] & 63) << 6 | buffer[_start++] & 63) - 0x10000;
      chunk[i++] = 0xD800 + (t >> 10);
      chunk[i++] = 0xDC00 + (t & 1023);
    } else chunk[i++] = (t & 15) << 12 | (buffer[_start++] & 63) << 6 | buffer[_start++] & 63;

    if (i > 8191) {
      (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
      i = 0;
    }
  }

  if (parts) {
    if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
    return parts.join('');
  }

  return String.fromCharCode.apply(String, chunk.slice(0, i));
}
/**
 * Writes a string as UTF8 bytes.
 * @exports
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */


function write(string, buffer, offset) {
  let _offset = offset;
  const start = _offset;
  let c1 = null; // character 1

  let c2 = null; // character 2

  for (let i = 0; i < string.length; ++i) {
    c1 = string.charCodeAt(i);

    if (c1 < 128) {
      buffer[_offset++] = c1;
    } else if (c1 < 2048) {
      buffer[_offset++] = c1 >> 6 | 192;
      buffer[_offset++] = c1 & 63 | 128;
    } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
      c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
      ++i;
      buffer[_offset++] = c1 >> 18 | 240;
      buffer[_offset++] = c1 >> 12 & 63 | 128;
      buffer[_offset++] = c1 >> 6 & 63 | 128;
      buffer[_offset++] = c1 & 63 | 128;
    } else {
      buffer[_offset++] = c1 >> 12 | 224;
      buffer[_offset++] = c1 >> 6 & 63 | 128;
      buffer[_offset++] = c1 & 63 | 128;
    }
  }

  return _offset - start;
}
/**
 * 模拟64位数字，处理超过uint32的情况
 *
 * @class LongBits
 */


let LongBits =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of LongBits.
   * @param {number} lo 低32位值
   * @param {number} hi 高32位值
   * @memberof LongBits
   */
  function LongBits(lo, hi) {
    (0, _classCallCheck2.default)(this, LongBits);
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  }
  /**
   * @description 计算所占字节数
   * @returns {number} 字节数
   * @memberof LongBits
   */


  (0, _createClass2.default)(LongBits, [{
    key: "length",
    value: function length() {
      const part0 = this.lo;
      const part1 = (this.lo >>> 28 | this.hi << 4) >>> 0;
      const part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    }
    /**
     * @description 转化为普通数字
     * @param {boolean} [unsigned=false] unsigned?
     * @returns {number}
     * @memberof LongBits
     */

  }, {
    key: "toNumber",
    value: function toNumber() {
      let unsigned = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!unsigned && this.hi >>> 31) {
        const lo = ~this.lo + 1 >>> 0;
        let hi = ~this.hi >>> 0;
        if (!lo) hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }

      return this.lo + this.hi * 4294967296;
    }
    /**
     * 根据value创建一个LongBits
     *
     * @static
     * @param {number} value 要转换的值
     * @returns {LongBits} LongBits实例
     * @memberof LongBits
     */

  }], [{
    key: "fromNumber",
    value: function fromNumber(value) {
      let _value = value;
      const sign = _value < 0;
      if (sign) _value = -_value;
      let lo = _value >>> 0;
      let hi = (_value - lo) / 4294967296 >>> 0;

      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;

        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295) hi = 0;
        }
      }

      return new LongBits(lo, hi);
    }
  }]);
  return LongBits;
}(); // 2 ** 32 - 1


const MAX_UINT32 = 4294967295;
/**
 * buffer读取越界错误
 *
 * @param {Reader} reader Reader实例
 * @param {number} writelength 长度
 * @returns {RangeError} 具体错误
 */

function indexOutOfRange(reader, writelength) {
  return RangeError("protobuf reader index out of range: ".concat(reader.pos, " + ").concat(writelength || 1, " > ").concat(reader.len));
}

function readLongVarint() {
  const bits = new LongBits(0, 0);
  let i = 0;

  if (this.len - this.pos > 4) {
    for (; i < 4; ++i) {
      // 1st..4th
      bits.lo = (bits.lo | (this.buffer[this.pos] & 127) << i * 7) >>> 0;
      if (this.buffer[this.pos++] < 128) return bits;
    } // 5th


    bits.lo = (bits.lo | (this.buffer[this.pos] & 127) << 28) >>> 0;
    bits.hi = (bits.hi | (this.buffer[this.pos] & 127) >> 4) >>> 0;
    if (this.buffer[this.pos++] < 128) return bits;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (this.pos >= this.len) throw indexOutOfRange(this); // 1st..3th

      bits.lo = (bits.lo | (this.buffer[this.pos] & 127) << i * 7) >>> 0;
      if (this.buffer[this.pos++] < 128) return bits;
    } // 4th


    bits.lo = (bits.lo | (this.buffer[this.pos++] & 127) << i * 7) >>> 0;
    return bits;
  }

  if (this.len - this.pos > 4) {
    for (; i < 5; ++i) {
      // 6th..10th
      bits.hi = (bits.hi | (this.buffer[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buffer[this.pos++] < 128) return bits;
    }
  } else {
    for (; i < 5; ++i) {
      if (this.pos >= this.len) throw indexOutOfRange(this); // 6th..10th

      bits.hi = (bits.hi | (this.buffer[this.pos] & 127) << i * 7 + 3) >>> 0;
      if (this.buffer[this.pos++] < 128) return bits;
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


let Reader =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Reader.
   * @param {Uint8Array} buffer 原始buffer
   * @memberof Reader
   */
  function Reader(buffer) {
    (0, _classCallCheck2.default)(this, Reader);
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


  (0, _createClass2.default)(Reader, [{
    key: "uint32",

    /**
     * 从当前位置读一个uint32
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */
    value: function uint32() {
      let value = MAX_UINT32;
      value = (this.buffer[this.pos] & 127) >>> 0;
      if (this.buffer[this.pos++] < 128) return value;
      value = (value | (this.buffer[this.pos] & 127) << 7) >>> 0;
      if (this.buffer[this.pos++] < 128) return value;
      value = (value | (this.buffer[this.pos] & 127) << 14) >>> 0;
      if (this.buffer[this.pos++] < 128) return value;
      value = (value | (this.buffer[this.pos] & 127) << 21) >>> 0;
      if (this.buffer[this.pos++] < 128) return value;
      value = (value | (this.buffer[this.pos] & 15) << 28) >>> 0;
      if (this.buffer[this.pos++] < 128) return value;
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

  }, {
    key: "int32",
    value: function int32() {
      return this.uint32() | 0;
    }
    /**
     * 从当前位置读一个suint32
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */

  }, {
    key: "sint32",
    value: function sint32() {
      const value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    }
    /**
     * 从当前位置读一个uint64
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */

  }, {
    key: "uint64",
    value: function uint64() {
      return readLongVarint.call(this).toNumber(true);
    }
    /**
     * 从当前位置读一个int64
     *
     * @returns {number} 读取结果
     * @memberof Reader
     */

  }, {
    key: "int64",
    value: function int64() {
      return readLongVarint.call(this).toNumber(false);
    }
    /**
     * 从当前位置读一个bool
     *
     * @returns {boolean} 读取结果
     * @memberof Reader
     */

  }, {
    key: "bool",
    value: function bool() {
      return this.uint32() !== 0;
    }
    /**
     * 从当前位置读一段buffer
     *
     * @returns {Uint8Array} 读取结果
     * @memberof Reader
     */

  }, {
    key: "bytes",
    value: function bytes() {
      const len = this.uint32();
      const start = this.pos;
      const end = this.pos + len;
      if (end > this.len) throw indexOutOfRange(this, len);
      this.pos = end; // 用subarray而不是slice，防止原数组被意外修改

      return this.buffer.subarray(start, end);
    }
  }, {
    key: "string",
    value: function string() {
      const bytes = this.bytes();
      return read(bytes, 0, bytes.length);
    }
    /**
     * 跳过一段长度
     *
     * @param {number} len 跳过的字节数
     * @returns {Reader} this
     * @memberof Reader
     */

  }, {
    key: "skip",
    value: function skip(len) {
      if (typeof len === 'number') {
        if (this.pos + len > this.len) throw indexOutOfRange(this, len);
        this.pos += len;
      } else {
        do {
          if (this.pos >= this.len) throw indexOutOfRange(this);
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

  }, {
    key: "skipType",
    value: function skipType(wireType) {
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

        case 3:
          {
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
          throw Error("invalid wire type ".concat(wireType, " at offset ").concat(this.pos));
      }

      return this;
    }
  }], [{
    key: "create",
    value: function create(buffer) {
      return new Reader(buffer);
    }
  }]);
  return Reader;
}();
/**
 * 空函数
 *
 * @returns {undefined}
 */


function noop() {} // empty

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
 * 写入值到buffer的操作
 *
 * @class Op
 */


let Op =
/**
 * Creates an instance of Op.
 * @param {function} fn 具体的操作函数
 * @param {number} len 长度
 * @param {number} value 具体的值
 * @memberof Op
 */
function Op(fn, len, value) {
  (0, _classCallCheck2.default)(this, Op);
  this.fn = fn;
  this.len = len;
  this.value = value;
  this.next = null;
};
/**
 * 写入一个变长编码值的操作
 *
 * @class VarintOp
 * @extends {Op}
 */


let VarintOp =
/*#__PURE__*/
function (_Op) {
  (0, _inherits2.default)(VarintOp, _Op);

  /**
   * Creates an instance of VarintOp.
   * @param {number} len 长度
   * @param {number} value 具体的值
   * @memberof VarintOp
   */
  function VarintOp(len, value) {
    var _this;

    (0, _classCallCheck2.default)(this, VarintOp);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(VarintOp).call(this));
    _this.len = len;
    _this.value = value;
    _this.next = null;

    _this.fn = function writeVarint32(value, buffer, pos) {
      let _value = value;
      let _pos = pos;

      while (_value > 127) {
        buffer[_pos++] = _value & 127 | 128;
        _value >>>= 7;
      }

      buffer[_pos] = _value;
    };

    return _this;
  }

  return VarintOp;
}(Op);
/**
 * 状态
 *
 * @class State
 */


let State =
/**
 * Creates an instance of State.
 * @param {Writer} writer Writer实例
 * @memberof State
 */
function State(writer) {
  (0, _classCallCheck2.default)(this, State);
  this.head = writer.head;
  this.tail = writer.tail;
  this.len = writer.len;
  this.next = writer.states;
};
/**
 * 编码类
 *
 * @export
 * @class Writer
 */


let Writer =
/*#__PURE__*/
function () {
  /**
   * Creates an instance of Writer.
   * @memberof Writer
   */
  function Writer() {
    (0, _classCallCheck2.default)(this, Writer);
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


  (0, _createClass2.default)(Writer, [{
    key: "_push",

    /**
     * 链表
     *
     * @param {function} fn 操作函数
     * @param {number} len 长度
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */
    value: function _push(fn, len, value) {
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

  }, {
    key: "uint32",
    value: function uint32(value) {
      let _value = value;
      _value = _value >>> 0;
      const op = new VarintOp(_value < 128 ? 1 : _value < 16384 ? 2 : _value < 2097152 ? 3 : _value < 268435456 ? 4 : 5, _value);
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

  }, {
    key: "int32",
    value: function int32(value) {
      return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
      : this.uint32(value);
    }
    /**
     * 写一个sint32到当前位置
     *
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "sint32",
    value: function sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    }
    /**
     * @description 写一个uint64到当前位置
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "uint64",
    value: function uint64(value) {
      const bits = LongBits.fromNumber(value);
      return this._push(writeVarint64, bits.length(), bits);
    }
    /**
     * @description 写一个int64到当前位置
     * @param {number} value 值
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "int64",
    value: function int64(value) {
      this.uint64(value);
    }
    /**
     * 写一个bool到当前位置
     *
     * @param {boolean} value 值
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "bool",
    value: function bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    }
    /**
     * 写一段子buffer到当前位置
     *
     * @param {Uint8Array} value 值
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "bytes",
    value: function bytes(value) {
      const len = value.len >>> 0;
      if (!len) return this._push(writeByte, 1, 0);
      return this.uint32(len)._push(writeBytes, len, value);
    }
    /**
     * 写一串string到当前位置
     *
     * @param {string} value 值
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "string",
    value: function string(value) {
      const len = length(value);
      return len ? this.uint32(len)._push(write, len, value) : this._push(writeByte, 1, 0);
    }
    /**
     * fork
     *
     * @returns {Writer} this
     * @memberof Writer
     */

  }, {
    key: "fork",
    value: function fork() {
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

  }, {
    key: "reset",
    value: function reset() {
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

  }, {
    key: "ldelim",
    value: function ldelim() {
      const {
        head,
        tail,
        len
      } = this;
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

  }, {
    key: "finish",
    value: function finish() {
      const buffer = new Uint8Array(this.len);
      let head = this.head.next; // skip noop

      let pos = 0;

      while (head) {
        head.fn(head.value, buffer, pos);
        pos += head.len;
        head = head.next;
      } // this.head = this.tail = null;


      return buffer;
    }
  }], [{
    key: "create",
    value: function create() {
      return new Writer();
    }
  }]);
  return Writer;
}(); // $protobuf.$util polyfill


var util = {
  emptyArray: [],
  emptyObject: {},

  ProtocolError() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Error(...args);
  },

  /**
   * @description Creates a new buffer
   * @date 2018-10-30
   * @param {number|number[]} sizeOrArray buffer size or number array
   * @returns {Uint8Array}
   */
  newBuffer(sizeOrArray) {
    return new Uint8Array(sizeOrArray);
  }

}; // $protobuf.roots polyfill

var roots = {};
const $protobuf = {
  Reader,
  Writer,
  util,
  roots
};
typeof window !== 'undefined' && (window.$protobuf = $protobuf);
module.exports = $protobuf;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/createClass":3,"@babel/runtime/helpers/getPrototypeOf":4,"@babel/runtime/helpers/inherits":5,"@babel/runtime/helpers/interopRequireDefault":6,"@babel/runtime/helpers/possibleConstructorReturn":7}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0gsT0FUSSxDQVVMOzs7QUFFQSxhQUFPLE1BQVA7QUFDSDs7OzZCQXZNZTtBQUNaLGFBQU8sSUFBSSxNQUFKLEVBQVA7QUFDSDs7O0tBd01MOzs7QUFFQSxJQUFJLElBQUksR0FBRztBQUNQLEVBQUEsVUFBVSxFQUFFLEVBREw7QUFFUCxFQUFBLFdBQVcsRUFBRSxFQUZOOztBQUdQLEVBQUEsYUFBYSxHQUFVO0FBQUEsc0NBQU4sSUFBTTtBQUFOLE1BQUEsSUFBTTtBQUFBOztBQUNuQixXQUFPLElBQUksS0FBSixDQUFVLEdBQUcsSUFBYixDQUFQO0FBQ0gsR0FMTTs7QUFNUDs7Ozs7O0FBTUEsRUFBQSxTQUFTLENBQUMsV0FBRCxFQUFjO0FBQ25CLFdBQU8sSUFBSSxVQUFKLENBQWUsV0FBZixDQUFQO0FBQ0g7O0FBZE0sQ0FBWCxDLENBaUJBOztBQUNBLElBQUksS0FBSyxHQUFHLEVBQVo7QUFFQSxNQUFNLFNBQVMsR0FBRztBQUNkLEVBQUEsTUFEYztBQUVkLEVBQUEsTUFGYztBQUdkLEVBQUEsSUFIYztBQUlkLEVBQUE7QUFKYyxDQUFsQjtBQU9BLE9BQU8sTUFBUCxLQUFrQixXQUFsQixLQUFrQyxNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFyRDtBQUVBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICog6K6h566XdXRmOOe8lueggeeahOWtl+espuS4sumVv+W6plxuICpcbiAqIEBleHBvcnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIOimgeiuoeeul+eahOWtl+espuS4slxuICogQHJldHVybnMge251bWJlcn0g6ZW/5bqmXG4gKi9cbmZ1bmN0aW9uIGxlbmd0aChzdHJpbmcpIHtcbiAgICBsZXQgbGVuID0gMDtcbiAgICBsZXQgYyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDEyOClcbiAgICAgICAgICAgIGxlbiArPSAxO1xuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OClcbiAgICAgICAgICAgIGxlbiArPSAyO1xuICAgICAgICBlbHNlIGlmICgoYyAmIDB4RkMwMCkgPT09IDB4RDgwMCAmJiAoc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpICYgMHhGQzAwKSA9PT0gMHhEQzAwKSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgICBsZW4gKz0gNDtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBsZW4gKz0gMztcbiAgICB9XG4gICAgcmV0dXJuIGxlbjtcbn1cblxuLyoqXG4gKiBSZWFkcyBVVEY4IGJ5dGVzIGFzIGEgc3RyaW5nLlxuICogQGV4cG9ydHNcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIFNvdXJjZSBidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBTb3VyY2Ugc3RhcnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgU291cmNlIGVuZFxuICogQHJldHVybnMge3N0cmluZ30gU3RyaW5nIHJlYWRcbiAqL1xuZnVuY3Rpb24gcmVhZChidWZmZXIsIHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgX3N0YXJ0ID0gc3RhcnQ7XG4gICAgY29uc3QgbGVuID0gZW5kIC0gX3N0YXJ0O1xuICAgIGlmIChsZW4gPCAxKVxuICAgICAgICByZXR1cm4gJyc7XG5cbiAgICBsZXQgcGFydHMgPSBudWxsO1xuICAgIGNvbnN0IGNodW5rID0gW107XG4gICAgbGV0IGkgPSAwOyAvLyBjaGFyIG9mZnNldFxuICAgIGxldCB0ID0gbnVsbDsgLy8gdGVtcG9yYXJ5XG5cbiAgICB3aGlsZSAoX3N0YXJ0IDwgZW5kKSB7XG4gICAgICAgIHQgPSBidWZmZXJbX3N0YXJ0KytdO1xuICAgICAgICBpZiAodCA8IDEyOClcbiAgICAgICAgICAgIGNodW5rW2krK10gPSB0O1xuICAgICAgICBlbHNlIGlmICh0ID4gMTkxICYmIHQgPCAyMjQpXG4gICAgICAgICAgICBjaHVua1tpKytdID0gKHQgJiAzMSkgPDwgNiB8IGJ1ZmZlcltfc3RhcnQrK10gJiA2MztcbiAgICAgICAgZWxzZSBpZiAodCA+IDIzOSAmJiB0IDwgMzY1KSB7XG4gICAgICAgICAgICB0ID0gKCh0ICYgNykgPDwgMTggfCAoYnVmZmVyW19zdGFydCsrXSAmIDYzKSA8PCAxMiB8IChidWZmZXJbX3N0YXJ0KytdICYgNjMpIDw8IDYgfCBidWZmZXJbX3N0YXJ0KytdICYgNjMpIC0gMHgxMDAwMDtcbiAgICAgICAgICAgIGNodW5rW2krK10gPSAweEQ4MDAgKyAodCA+PiAxMCk7XG4gICAgICAgICAgICBjaHVua1tpKytdID0gMHhEQzAwICsgKHQgJiAxMDIzKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBjaHVua1tpKytdID0gKHQgJiAxNSkgPDwgMTIgfCAoYnVmZmVyW19zdGFydCsrXSAmIDYzKSA8PCA2IHwgYnVmZmVyW19zdGFydCsrXSAmIDYzO1xuICAgICAgICBpZiAoaSA+IDgxOTEpIHtcbiAgICAgICAgICAgIChwYXJ0cyB8fCAocGFydHMgPSBbXSkpLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNodW5rKSk7XG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJ0cykge1xuICAgICAgICBpZiAoaSlcbiAgICAgICAgICAgIHBhcnRzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNodW5rLnNsaWNlKDAsIGkpKSk7XG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKCcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNodW5rLnNsaWNlKDAsIGkpKTtcbn1cblxuLyoqXG4gKiBXcml0ZXMgYSBzdHJpbmcgYXMgVVRGOCBieXRlcy5cbiAqIEBleHBvcnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFNvdXJjZSBzdHJpbmdcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIERlc3RpbmF0aW9uIGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBEZXN0aW5hdGlvbiBvZmZzZXRcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEJ5dGVzIHdyaXR0ZW5cbiAqL1xuZnVuY3Rpb24gd3JpdGUoc3RyaW5nLCBidWZmZXIsIG9mZnNldCkge1xuICAgIGxldCBfb2Zmc2V0ID0gb2Zmc2V0O1xuICAgIGNvbnN0IHN0YXJ0ID0gX29mZnNldDtcbiAgICBsZXQgYzEgPSBudWxsOyAvLyBjaGFyYWN0ZXIgMVxuICAgIGxldCBjMiA9IG51bGw7IC8vIGNoYXJhY3RlciAyXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjMSA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzE7XG4gICAgICAgIH0gZWxzZSBpZiAoYzEgPCAyMDQ4KSB7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDYgfCAxOTI7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxICYgNjMgfCAxMjg7XG4gICAgICAgIH0gZWxzZSBpZiAoKGMxICYgMHhGQzAwKSA9PT0gMHhEODAwICYmICgoYzIgPSBzdHJpbmcuY2hhckNvZGVBdChpICsgMSkpICYgMHhGQzAwKSA9PT0gMHhEQzAwKSB7XG4gICAgICAgICAgICBjMSA9IDB4MTAwMDAgKyAoKGMxICYgMHgwM0ZGKSA8PCAxMCkgKyAoYzIgJiAweDAzRkYpO1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiAxOCB8IDI0MDtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gMTIgJiA2MyB8IDEyODtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gNiAmIDYzIHwgMTI4O1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSAmIDYzIHwgMTI4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiAxMiB8IDIyNDtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gNiAmIDYzIHwgMTI4O1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSAmIDYzIHwgMTI4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfb2Zmc2V0IC0gc3RhcnQ7XG59XG5cbi8qKlxuICog5qih5oufNjTkvY3mlbDlrZfvvIzlpITnkIbotoXov4d1aW50MzLnmoTmg4XlhrVcbiAqXG4gKiBAY2xhc3MgTG9uZ0JpdHNcbiAqL1xuY2xhc3MgTG9uZ0JpdHMge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTG9uZ0JpdHMuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxvIOS9jjMy5L2N5YC8XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhpIOmrmDMy5L2N5YC8XG4gICAgICogQG1lbWJlcm9mIExvbmdCaXRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobG8sIGhpKSB7XG4gICAgICAgIHRoaXMubG8gPSBsbyA+Pj4gMDtcbiAgICAgICAgdGhpcy5oaSA9IGhpID4+PiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDorqHnrpfmiYDljaDlrZfoioLmlbBcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDlrZfoioLmlbBcbiAgICAgKiBAbWVtYmVyb2YgTG9uZ0JpdHNcbiAgICAgKi9cbiAgICBsZW5ndGgoKSB7XG4gICAgICAgIGNvbnN0IHBhcnQwID0gdGhpcy5sbztcbiAgICAgICAgY29uc3QgcGFydDEgPSAodGhpcy5sbyA+Pj4gMjggfCB0aGlzLmhpIDw8IDQpID4+PiAwO1xuICAgICAgICBjb25zdCBwYXJ0MiA9IHRoaXMuaGkgPj4+IDI0O1xuXG4gICAgICAgIHJldHVybiBwYXJ0MiA9PT0gMFxuICAgICAgICAgICAgPyBwYXJ0MSA9PT0gMFxuICAgICAgICAgICAgICAgID8gcGFydDAgPCAxNjM4NFxuICAgICAgICAgICAgICAgICAgICA/IHBhcnQwIDwgMTI4ID8gMSA6IDJcbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0MCA8IDIwOTcxNTIgPyAzIDogNFxuICAgICAgICAgICAgICAgIDogcGFydDEgPCAxNjM4NFxuICAgICAgICAgICAgICAgICAgICA/IHBhcnQxIDwgMTI4ID8gNSA6IDZcbiAgICAgICAgICAgICAgICAgICAgOiBwYXJ0MSA8IDIwOTcxNTIgPyA3IDogOFxuICAgICAgICAgICAgOiBwYXJ0MiA8IDEyOCA/IDkgOiAxMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6L2s5YyW5Li65pmu6YCa5pWw5a2XXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdW5zaWduZWQ9ZmFsc2VdIHVuc2lnbmVkP1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIExvbmdCaXRzXG4gICAgICovXG4gICAgdG9OdW1iZXIodW5zaWduZWQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXVuc2lnbmVkICYmIHRoaXMuaGkgPj4+IDMxKSB7XG4gICAgICAgICAgICBjb25zdCBsbyA9IH50aGlzLmxvICsgMSA+Pj4gMDtcbiAgICAgICAgICAgIGxldCBoaSA9IH50aGlzLmhpID4+PiAwO1xuICAgICAgICAgICAgaWYgKCFsbylcbiAgICAgICAgICAgICAgICBoaSA9IGhpICsgMSA+Pj4gMDtcbiAgICAgICAgICAgIHJldHVybiAtKGxvICsgaGkgKiA0Mjk0OTY3Mjk2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sbyArIHRoaXMuaGkgKiA0Mjk0OTY3Mjk2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrnZhbHVl5Yib5bu65LiA5LiqTG9uZ0JpdHNcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg6KaB6L2s5o2i55qE5YC8XG4gICAgICogQHJldHVybnMge0xvbmdCaXRzfSBMb25nQml0c+WunuS+i1xuICAgICAqIEBtZW1iZXJvZiBMb25nQml0c1xuICAgICAqL1xuICAgIHN0YXRpYyBmcm9tTnVtYmVyKHZhbHVlKSB7XG4gICAgICAgIGxldCBfdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY29uc3Qgc2lnbiA9IF92YWx1ZSA8IDA7XG5cbiAgICAgICAgaWYgKHNpZ24pXG4gICAgICAgICAgICBfdmFsdWUgPSAtX3ZhbHVlO1xuXG4gICAgICAgIGxldCBsbyA9IF92YWx1ZSA+Pj4gMDtcbiAgICAgICAgbGV0IGhpID0gKF92YWx1ZSAtIGxvKSAvIDQyOTQ5NjcyOTYgPj4+IDA7XG5cbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICAgIGhpID0gfmhpID4+PiAwO1xuICAgICAgICAgICAgbG8gPSB+bG8gPj4+IDA7XG4gICAgICAgICAgICBpZiAoKytsbyA+IDQyOTQ5NjcyOTUpIHtcbiAgICAgICAgICAgICAgICBsbyA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCsraGkgPiA0Mjk0OTY3Mjk1KVxuICAgICAgICAgICAgICAgICAgICBoaSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IExvbmdCaXRzKGxvLCBoaSk7XG4gICAgfVxufVxuXG4vLyAyICoqIDMyIC0gMVxuY29uc3QgTUFYX1VJTlQzMiA9IDQyOTQ5NjcyOTU7XG5cbi8qKlxuICogYnVmZmVy6K+75Y+W6LaK55WM6ZSZ6K+vXG4gKlxuICogQHBhcmFtIHtSZWFkZXJ9IHJlYWRlciBSZWFkZXLlrp7kvotcbiAqIEBwYXJhbSB7bnVtYmVyfSB3cml0ZWxlbmd0aCDplb/luqZcbiAqIEByZXR1cm5zIHtSYW5nZUVycm9yfSDlhbfkvZPplJnor69cbiAqL1xuZnVuY3Rpb24gaW5kZXhPdXRPZlJhbmdlKHJlYWRlciwgd3JpdGVsZW5ndGgpIHtcbiAgICByZXR1cm4gUmFuZ2VFcnJvcihgcHJvdG9idWYgcmVhZGVyIGluZGV4IG91dCBvZiByYW5nZTogJHtyZWFkZXIucG9zfSArICR7d3JpdGVsZW5ndGggfHwgMX0gPiAke3JlYWRlci5sZW59YCk7XG59XG5cbmZ1bmN0aW9uIHJlYWRMb25nVmFyaW50KCkge1xuICAgIGNvbnN0IGJpdHMgPSBuZXcgTG9uZ0JpdHMoMCwgMCk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGlmICh0aGlzLmxlbiAtIHRoaXMucG9zID4gNCkge1xuICAgICAgICBmb3IgKDsgaSA8IDQ7ICsraSkge1xuICAgICAgICAgICAgLy8gMXN0Li40dGhcbiAgICAgICAgICAgIGJpdHMubG8gPSAoYml0cy5sbyB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IGkgKiA3KSA+Pj4gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOClcbiAgICAgICAgICAgICAgICByZXR1cm4gYml0cztcbiAgICAgICAgfVxuICAgICAgICAvLyA1dGhcbiAgICAgICAgYml0cy5sbyA9IChiaXRzLmxvIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgMjgpID4+PiAwO1xuICAgICAgICBiaXRzLmhpID0gKGJpdHMuaGkgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA+PiA0KSA+Pj4gMDtcbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KVxuICAgICAgICAgICAgcmV0dXJuIGJpdHM7XG4gICAgICAgIGkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoOyBpIDwgMzsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW4pXG4gICAgICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMpO1xuICAgICAgICAgICAgLy8gMXN0Li4zdGhcbiAgICAgICAgICAgIGJpdHMubG8gPSAoYml0cy5sbyB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IGkgKiA3KSA+Pj4gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOClcbiAgICAgICAgICAgICAgICByZXR1cm4gYml0cztcbiAgICAgICAgfVxuICAgICAgICAvLyA0dGhcbiAgICAgICAgYml0cy5sbyA9IChiaXRzLmxvIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdICYgMTI3KSA8PCBpICogNykgPj4+IDA7XG4gICAgICAgIHJldHVybiBiaXRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5sZW4gLSB0aGlzLnBvcyA+IDQpIHtcbiAgICAgICAgZm9yICg7IGkgPCA1OyArK2kpIHtcbiAgICAgICAgICAgIC8vIDZ0aC4uMTB0aFxuICAgICAgICAgICAgYml0cy5oaSA9IChiaXRzLmhpIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgaSAqIDcgKyAzKSA+Pj4gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOClcbiAgICAgICAgICAgICAgICByZXR1cm4gYml0cztcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoOyBpIDwgNTsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW4pXG4gICAgICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMpO1xuICAgICAgICAgICAgLy8gNnRoLi4xMHRoXG4gICAgICAgICAgICBiaXRzLmhpID0gKGJpdHMuaGkgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA8PCBpICogNyArIDMpID4+PiAwO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KVxuICAgICAgICAgICAgICAgIHJldHVybiBiaXRzO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IEVycm9yKCdpbnZhbGlkIHZhcmludCBlbmNvZGluZycpO1xufVxuXG4vKipcbiAqIOino+eggeexu1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZWFkZXJcbiAqL1xuY2xhc3MgUmVhZGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlYWRlci5cbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDljp/lp4tidWZmZXJcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICB0aGlzLnBvcyA9IDA7XG4gICAgICAgIHRoaXMubGVuID0gYnVmZmVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7pSZWFkZXLlrp7kvotcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDljp/lp4tidWZmZXJcbiAgICAgKiBAcmV0dXJucyB7UmVhZGVyfSBSZWFkZXLlrp7kvotcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShidWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkZXIoYnVmZmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKp1aW50MzJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICB1aW50MzIoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IE1BWF9VSU5UMzI7XG5cbiAgICAgICAgdmFsdWUgPSAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgNykgPj4+IDA7IGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IDE0KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgMjEpID4+PiAwOyBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTUpIDw8IDI4KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5wb3MgKz0gNTtcbiAgICAgICAgaWYgKHRoaXMucG9zID4gdGhpcy5sZW4pIHtcbiAgICAgICAgICAgIHRoaXMucG9zID0gdGhpcy5sZW47XG4gICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKppbnQzMlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIGludDMyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51aW50MzIoKSB8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5Liqc3VpbnQzMlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHNpbnQzMigpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnVpbnQzMigpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPj4+IDEgXiAtKHZhbHVlICYgMSkgfCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qnVpbnQ2NFxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHVpbnQ2NCgpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRMb25nVmFyaW50LmNhbGwodGhpcykudG9OdW1iZXIodHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5LiqaW50NjRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBpbnQ2NCgpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRMb25nVmFyaW50LmNhbGwodGhpcykudG9OdW1iZXIoZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qmJvb2xcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDor7vlj5bnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgYm9vbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWludDMyKCkgIT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5q61YnVmZmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7VWludDhBcnJheX0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIGJ5dGVzKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnVpbnQzMigpO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMucG9zO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnBvcyArIGxlbjtcblxuICAgICAgICBpZiAoZW5kID4gdGhpcy5sZW4pXG4gICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgbGVuKTtcblxuICAgICAgICB0aGlzLnBvcyA9IGVuZDtcblxuICAgICAgICAvLyDnlKhzdWJhcnJheeiAjOS4jeaYr3NsaWNl77yM6Ziy5q2i5Y6f5pWw57uE6KKr5oSP5aSW5L+u5pS5XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5zdWJhcnJheShzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICBzdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5ieXRlcygpO1xuICAgICAgICByZXR1cm4gcmVhZChieXRlcywgMCwgYnl0ZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDot7Pov4fkuIDmrrXplb/luqZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW4g6Lez6L+H55qE5a2X6IqC5pWwXG4gICAgICogQHJldHVybnMge1JlYWRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBza2lwKGxlbikge1xuICAgICAgICBpZiAodHlwZW9mIGxlbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyArIGxlbiA+IHRoaXMubGVuKVxuICAgICAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCBsZW4pO1xuICAgICAgICAgICAgdGhpcy5wb3MgKz0gbGVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gJiAxMjgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi3s+i/h+S4gOenjeexu+Wei1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpcmVUeXBlIOi3s+i/h+eahOexu+Wei1xuICAgICAqIEByZXR1cm5zIHtSZWFkZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgc2tpcFR5cGUod2lyZVR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh3aXJlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCg4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnNraXAodGhpcy51aW50MzIoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgICAgICBsZXQgX3dpcmVUeXBlID0gdGhpcy51aW50MzIoKSAmIDc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKF93aXJlVHlwZSAhPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraXBUeXBlKF93aXJlVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIF93aXJlVHlwZSA9IHRoaXMudWludDMyKCkgJiA3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLnNraXAoNCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGludmFsaWQgd2lyZSB0eXBlICR7d2lyZVR5cGV9IGF0IG9mZnNldCAke3RoaXMucG9zfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnqbrlh73mlbBcbiAqXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAgIC8vIGVtcHR5XG59XG5cbi8qKlxuICog5YaZ5LiA5LiqYnl0ZeWIsGJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDopoHlhpnlhaXnmoTlgLxcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIOiiq+WGmeWFpeeahGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyDlhpnlhaXkvY3nva5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIHdyaXRlQnl0ZSh2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICBidWZmZXJbcG9zXSA9IHZhbHVlICYgMjU1O1xufVxuXG4vKipcbiAqIOWGmeS4gOautWJ1ZmZlcuWIsGJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gdmFsdWUg6KaB5YaZ5YWl55qE5a2QYnVmZmVyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDooqvlhpnlhaXnmoRidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3Mg5YaZ5YWl5L2N572uXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiB3cml0ZUJ5dGVzKHZhbHVlLCBidWZmZXIsIHBvcykge1xuICAgIGJ1ZmZlci5zZXQodmFsdWUsIHBvcyk7XG59XG5cbi8qKlxuICog5YaZ5YWl5LiA5Liq5Y+Y6ZW/55qE6LSf5pWw5YiwYnVmZmVyXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOimgeWGmeWFpeeahOWAvFxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIg6KKr5YaZ5YWl55qEYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIOWGmeWFpeS9jee9rlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gd3JpdGVWYXJpbnQ2NCh2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICBsZXQgX3BvcyA9IHBvcztcblxuICAgIHdoaWxlICh2YWx1ZS5oaSkge1xuICAgICAgICBidWZmZXJbX3BvcysrXSA9IHZhbHVlLmxvICYgMTI3IHwgMTI4O1xuICAgICAgICB2YWx1ZS5sbyA9ICh2YWx1ZS5sbyA+Pj4gNyB8IHZhbHVlLmhpIDw8IDI1KSA+Pj4gMDtcbiAgICAgICAgdmFsdWUuaGkgPj4+PSA3O1xuICAgIH1cbiAgICB3aGlsZSAodmFsdWUubG8gPiAxMjcpIHtcbiAgICAgICAgYnVmZmVyW19wb3MrK10gPSB2YWx1ZS5sbyAmIDEyNyB8IDEyODtcbiAgICAgICAgdmFsdWUubG8gPSB2YWx1ZS5sbyA+Pj4gNztcbiAgICB9XG4gICAgYnVmZmVyW19wb3MrK10gPSB2YWx1ZS5sbztcbn1cblxuLyoqXG4gKiDlhpnlhaXlgLzliLBidWZmZXLnmoTmk43kvZxcbiAqXG4gKiBAY2xhc3MgT3BcbiAqL1xuY2xhc3MgT3Age1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgT3AuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g5YW35L2T55qE5pON5L2c5Ye95pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YW35L2T55qE5YC8XG4gICAgICogQG1lbWJlcm9mIE9wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZm4sIGxlbiwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIH1cbn1cblxuLyoqXG4gKiDlhpnlhaXkuIDkuKrlj5jplb/nvJbnoIHlgLznmoTmk43kvZxcbiAqXG4gKiBAY2xhc3MgVmFyaW50T3BcbiAqIEBleHRlbmRzIHtPcH1cbiAqL1xuY2xhc3MgVmFyaW50T3AgZXh0ZW5kcyBPcCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBWYXJpbnRPcC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuIOmVv+W6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlhbfkvZPnmoTlgLxcbiAgICAgKiBAbWVtYmVyb2YgVmFyaW50T3BcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsZW4sIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmZuID0gZnVuY3Rpb24gd3JpdGVWYXJpbnQzMih2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICAgICAgICAgIGxldCBfdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBfcG9zID0gcG9zO1xuXG4gICAgICAgICAgICB3aGlsZSAoX3ZhbHVlID4gMTI3KSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyW19wb3MrK10gPSBfdmFsdWUgJiAxMjcgfCAxMjg7XG4gICAgICAgICAgICAgICAgX3ZhbHVlID4+Pj0gNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1ZmZlcltfcG9zXSA9IF92YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICog54q25oCBXG4gKlxuICogQGNsYXNzIFN0YXRlXG4gKi9cbmNsYXNzIFN0YXRlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFN0YXRlLlxuICAgICAqIEBwYXJhbSB7V3JpdGVyfSB3cml0ZXIgV3JpdGVy5a6e5L6LXG4gICAgICogQG1lbWJlcm9mIFN0YXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iod3JpdGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHdyaXRlci5oZWFkO1xuICAgICAgICB0aGlzLnRhaWwgPSB3cml0ZXIudGFpbDtcbiAgICAgICAgdGhpcy5sZW4gPSB3cml0ZXIubGVuO1xuICAgICAgICB0aGlzLm5leHQgPSB3cml0ZXIuc3RhdGVzO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnvJbnoIHnsbtcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgV3JpdGVyXG4gKi9cbmNsYXNzIFdyaXRlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBXcml0ZXIuXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxlbiA9IDA7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBPcChub29wLCAwLCAwKTtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLnN0YXRlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu6V3JpdGVy5a6e5L6LXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gV3JpdGVy5a6e5L6LXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZO+6KGoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiDmk43kvZzlh73mlbBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuIOmVv+W6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIF9wdXNoKGZuLCBsZW4sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5uZXh0ID0gbmV3IE9wKGZuLCBsZW4sIHZhbHVlKTtcbiAgICAgICAgdGhpcy5sZW4gKz0gbGVuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKp1aW50MzLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHVpbnQzMih2YWx1ZSkge1xuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIF92YWx1ZSA9IF92YWx1ZSA+Pj4gMDtcblxuICAgICAgICBjb25zdCBvcCA9IG5ldyBWYXJpbnRPcChcbiAgICAgICAgICAgIF92YWx1ZSA8IDEyOCA/IDFcbiAgICAgICAgICAgICAgICA6IF92YWx1ZSA8IDE2Mzg0ID8gMlxuICAgICAgICAgICAgICAgICAgICA6IF92YWx1ZSA8IDIwOTcxNTIgPyAzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92YWx1ZSA8IDI2ODQzNTQ1NiA/IDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDUsXG4gICAgICAgICAgICBfdmFsdWUpO1xuXG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5uZXh0ID0gb3A7XG4gICAgICAgIHRoaXMubGVuICs9IG9wLmxlbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKppbnQzMuWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgaW50MzIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgMFxuICAgICAgICAgICAgPyB0aGlzLl9wdXNoKHdyaXRlVmFyaW50NjQsIDEwLCBMb25nQml0cy5mcm9tTnVtYmVyKHZhbHVlKSkgLy8gMTAgYnl0ZXMgcGVyIHNwZWNcbiAgICAgICAgICAgIDogdGhpcy51aW50MzIodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeS4gOS4qnNpbnQzMuWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgc2ludDMyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpbnQzMigodmFsdWUgPDwgMSBeIHZhbHVlID4+IDMxKSA+Pj4gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWGmeS4gOS4qnVpbnQ2NOWIsOW9k+WJjeS9jee9rlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHVpbnQ2NCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBiaXRzID0gTG9uZ0JpdHMuZnJvbU51bWJlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXNoKHdyaXRlVmFyaW50NjQsIGJpdHMubGVuZ3RoKCksIGJpdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlhpnkuIDkuKppbnQ2NOWIsOW9k+WJjeS9jee9rlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGludDY0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMudWludDY0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKpib29s5Yiw5b2T5YmN5L2N572uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgYm9vbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIHZhbHVlID8gMSA6IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeS4gOauteWtkGJ1ZmZlcuWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGJ5dGVzKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbiA+Pj4gMDtcblxuICAgICAgICBpZiAoIWxlbilcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdXNoKHdyaXRlQnl0ZSwgMSwgMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudWludDMyKGxlbikuX3B1c2god3JpdGVCeXRlcywgbGVuLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5Liyc3RyaW5n5Yiw5b2T5YmN5L2N572uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBzdHJpbmcodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbGVuID0gbGVuZ3RoKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgICAgICAgPyB0aGlzLnVpbnQzMihsZW4pLl9wdXNoKHdyaXRlLCBsZW4sIHZhbHVlKVxuICAgICAgICAgICAgOiB0aGlzLl9wdXNoKHdyaXRlQnl0ZSwgMSwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZm9ya1xuICAgICAqXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBmb3JrKCkge1xuICAgICAgICB0aGlzLnN0YXRlcyA9IG5ldyBTdGF0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbmV3IE9wKG5vb3AsIDAsIDApO1xuICAgICAgICB0aGlzLmxlbiA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJlc2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuc3RhdGVzLmhlYWQ7XG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnN0YXRlcy50YWlsO1xuICAgICAgICAgICAgdGhpcy5sZW4gPSB0aGlzLnN0YXRlcy5sZW47XG4gICAgICAgICAgICB0aGlzLnN0YXRlcyA9IHRoaXMuc3RhdGVzLm5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBuZXcgT3Aobm9vcCwgMCwgMCk7XG4gICAgICAgICAgICB0aGlzLmxlbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbGRlbGltXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGxkZWxpbSgpIHtcbiAgICAgICAgY29uc3QgeyBoZWFkLCB0YWlsLCBsZW4gfSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpLnVpbnQzMihsZW4pO1xuICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICB0aGlzLnRhaWwubmV4dCA9IGhlYWQubmV4dDsgLy8gc2tpcCBub29wXG4gICAgICAgICAgICB0aGlzLnRhaWwgPSB0YWlsO1xuICAgICAgICAgICAgdGhpcy5sZW4gKz0gbGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeWFpee7k+adn++8jOW8gOWni+e8lueggVxuICAgICAqXG4gICAgICogQHJldHVybnMge1VpbnQ4QXJyYXl9IOe8lueggee7k+aenFxuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBmaW5pc2goKSB7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuKTtcbiAgICAgICAgbGV0IGhlYWQgPSB0aGlzLmhlYWQubmV4dDsgLy8gc2tpcCBub29wXG4gICAgICAgIGxldCBwb3MgPSAwO1xuXG4gICAgICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICAgICAgICBoZWFkLmZuKGhlYWQudmFsdWUsIGJ1ZmZlciwgcG9zKTtcbiAgICAgICAgICAgIHBvcyArPSBoZWFkLmxlbjtcbiAgICAgICAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbn1cblxuLy8gJHByb3RvYnVmLiR1dGlsIHBvbHlmaWxsXG5cbnZhciB1dGlsID0ge1xuICAgIGVtcHR5QXJyYXk6IFtdLFxuICAgIGVtcHR5T2JqZWN0OiB7fSxcbiAgICBQcm90b2NvbEVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvciguLi5hcmdzKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiBDcmVhdGVzIGEgbmV3IGJ1ZmZlclxuICAgICAqIEBkYXRlIDIwMTgtMTAtMzBcbiAgICAgKiBAcGFyYW0ge251bWJlcnxudW1iZXJbXX0gc2l6ZU9yQXJyYXkgYnVmZmVyIHNpemUgb3IgbnVtYmVyIGFycmF5XG4gICAgICogQHJldHVybnMge1VpbnQ4QXJyYXl9XG4gICAgICovXG4gICAgbmV3QnVmZmVyKHNpemVPckFycmF5KSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShzaXplT3JBcnJheSk7XG4gICAgfVxufTtcblxuLy8gJHByb3RvYnVmLnJvb3RzIHBvbHlmaWxsXG52YXIgcm9vdHMgPSB7fTtcblxuY29uc3QgJHByb3RvYnVmID0ge1xuICAgIFJlYWRlcixcbiAgICBXcml0ZXIsXG4gICAgdXRpbCxcbiAgICByb290c1xufTtcblxudHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdy4kcHJvdG9idWYgPSAkcHJvdG9idWYpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICRwcm90b2J1ZjtcbiJdfQ==
