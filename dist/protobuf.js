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
var setPrototypeOf = require("./setPrototypeOf");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
},{"./setPrototypeOf":9}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],6:[function(require,module,exports){
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
},{"./setPrototypeOf":9}],7:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;
},{}],8:[function(require,module,exports){
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":10,"./assertThisInitialized":1}],9:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
'use strict';
/**
 * 计算utf8编码的字符串长度
 *
 * @exports
 * @param {string} string 要计算的字符串
 * @returns {number} 长度
 */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function length(string) {
  var len = 0;
  var c = 0;

  for (var i = 0; i < string.length; ++i) {
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
  var _start = start;
  var len = end - _start;
  if (len < 1) return '';
  var parts = null;
  var chunk = [];
  var i = 0; // char offset

  var t = null; // temporary

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
  var _offset = offset;
  var start = _offset;
  var c1 = null; // character 1

  var c2 = null; // character 2

  for (var i = 0; i < string.length; ++i) {
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


var LongBits =
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
      var part0 = this.lo;
      var part1 = (this.lo >>> 28 | this.hi << 4) >>> 0;
      var part2 = this.hi >>> 24;
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
      var unsigned = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0;
        var hi = ~this.hi >>> 0;
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
      var _value = value;
      var sign = _value < 0;
      if (sign) _value = -_value;
      var lo = _value >>> 0;
      var hi = (_value - lo) / 4294967296 >>> 0;

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


var MAX_UINT32 = 4294967295;
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
  var bits = new LongBits(0, 0);
  var i = 0;

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


var Reader =
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
      var value = MAX_UINT32;
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
      var value = this.uint32();
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
      var len = this.uint32();
      var start = this.pos;
      var end = this.pos + len;
      if (end > this.len) throw indexOutOfRange(this, len);
      this.pos = end; // 用subarray而不是slice，防止原数组被意外修改

      return this.buffer.subarray(start, end);
    }
  }, {
    key: "string",
    value: function string() {
      var bytes = this.bytes();
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
            var _wireType = this.uint32() & 7;

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
  var _pos = pos;

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


var Op =
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


var VarintOp =
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
      var _value = value;
      var _pos = pos;

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


var State =
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


var Writer =
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
      var _value = value;
      _value = _value >>> 0;
      var op = new VarintOp(_value < 128 ? 1 : _value < 16384 ? 2 : _value < 2097152 ? 3 : _value < 268435456 ? 4 : 5, _value);
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
      var bits = LongBits.fromNumber(value);
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
      var len = value.len >>> 0;
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
      var len = length(value);
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
      var head = this.head,
          tail = this.tail,
          len = this.len;
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
      var buffer = new Uint8Array(this.len);
      var head = this.head.next; // skip noop

      var pos = 0;

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
  ProtocolError: function ProtocolError() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _construct2.default)(Error, args);
  },

  /**
   * @description Creates a new buffer
   * @date 2018-10-30
   * @param {number|number[]} sizeOrArray buffer size or number array
   * @returns {Uint8Array}
   */
  newBuffer: function newBuffer(sizeOrArray) {
    return new Uint8Array(sizeOrArray);
  }
}; // $protobuf.roots polyfill

var roots = {};
var $protobuf = {
  Reader: Reader,
  Writer: Writer,
  util: util,
  roots: roots
};
typeof window !== 'undefined' && (window.$protobuf = $protobuf);
module.exports = $protobuf;

},{"@babel/runtime/helpers/classCallCheck":2,"@babel/runtime/helpers/construct":3,"@babel/runtime/helpers/createClass":4,"@babel/runtime/helpers/getPrototypeOf":5,"@babel/runtime/helpers/inherits":6,"@babel/runtime/helpers/interopRequireDefault":7,"@babel/runtime/helpers/possibleConstructorReturn":8}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NvbnN0cnVjdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NvbnN0cnVjdDsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIOiuoeeul3V0ZjjnvJbnoIHnmoTlrZfnrKbkuLLplb/luqZcbiAqXG4gKiBAZXhwb3J0c1xuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyDopoHorqHnrpfnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IOmVv+W6plxuICovXG5mdW5jdGlvbiBsZW5ndGgoc3RyaW5nKSB7XG4gICAgbGV0IGxlbiA9IDA7XG4gICAgbGV0IGMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAxMjgpXG4gICAgICAgICAgICBsZW4gKz0gMTtcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpXG4gICAgICAgICAgICBsZW4gKz0gMjtcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweEZDMDApID09PSAweEQ4MDAgJiYgKHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4RkMwMCkgPT09IDB4REMwMCkge1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgbGVuICs9IDQ7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgbGVuICs9IDM7XG4gICAgfVxuICAgIHJldHVybiBsZW47XG59XG5cbi8qKlxuICogUmVhZHMgVVRGOCBieXRlcyBhcyBhIHN0cmluZy5cbiAqIEBleHBvcnRzXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBTb3VyY2UgYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU291cmNlIHN0YXJ0XG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFNvdXJjZSBlbmRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyByZWFkXG4gKi9cbmZ1bmN0aW9uIHJlYWQoYnVmZmVyLCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IF9zdGFydCA9IHN0YXJ0O1xuICAgIGNvbnN0IGxlbiA9IGVuZCAtIF9zdGFydDtcbiAgICBpZiAobGVuIDwgMSlcbiAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgbGV0IHBhcnRzID0gbnVsbDtcbiAgICBjb25zdCBjaHVuayA9IFtdO1xuICAgIGxldCBpID0gMDsgLy8gY2hhciBvZmZzZXRcbiAgICBsZXQgdCA9IG51bGw7IC8vIHRlbXBvcmFyeVxuXG4gICAgd2hpbGUgKF9zdGFydCA8IGVuZCkge1xuICAgICAgICB0ID0gYnVmZmVyW19zdGFydCsrXTtcbiAgICAgICAgaWYgKHQgPCAxMjgpXG4gICAgICAgICAgICBjaHVua1tpKytdID0gdDtcbiAgICAgICAgZWxzZSBpZiAodCA+IDE5MSAmJiB0IDwgMjI0KVxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9ICh0ICYgMzEpIDw8IDYgfCBidWZmZXJbX3N0YXJ0KytdICYgNjM7XG4gICAgICAgIGVsc2UgaWYgKHQgPiAyMzkgJiYgdCA8IDM2NSkge1xuICAgICAgICAgICAgdCA9ICgodCAmIDcpIDw8IDE4IHwgKGJ1ZmZlcltfc3RhcnQrK10gJiA2MykgPDwgMTIgfCAoYnVmZmVyW19zdGFydCsrXSAmIDYzKSA8PCA2IHwgYnVmZmVyW19zdGFydCsrXSAmIDYzKSAtIDB4MTAwMDA7XG4gICAgICAgICAgICBjaHVua1tpKytdID0gMHhEODAwICsgKHQgPj4gMTApO1xuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IDB4REMwMCArICh0ICYgMTAyMyk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9ICh0ICYgMTUpIDw8IDEyIHwgKGJ1ZmZlcltfc3RhcnQrK10gJiA2MykgPDwgNiB8IGJ1ZmZlcltfc3RhcnQrK10gJiA2MztcbiAgICAgICAgaWYgKGkgPiA4MTkxKSB7XG4gICAgICAgICAgICAocGFydHMgfHwgKHBhcnRzID0gW10pKS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuaykpO1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFydHMpIHtcbiAgICAgICAgaWYgKGkpXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuay5zbGljZSgwLCBpKSkpO1xuICAgICAgICByZXR1cm4gcGFydHMuam9pbignJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuay5zbGljZSgwLCBpKSk7XG59XG5cbi8qKlxuICogV3JpdGVzIGEgc3RyaW5nIGFzIFVURjggYnl0ZXMuXG4gKiBAZXhwb3J0c1xuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBTb3VyY2Ugc3RyaW5nXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBEZXN0aW5hdGlvbiBidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgRGVzdGluYXRpb24gb2Zmc2V0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBCeXRlcyB3cml0dGVuXG4gKi9cbmZ1bmN0aW9uIHdyaXRlKHN0cmluZywgYnVmZmVyLCBvZmZzZXQpIHtcbiAgICBsZXQgX29mZnNldCA9IG9mZnNldDtcbiAgICBjb25zdCBzdGFydCA9IF9vZmZzZXQ7XG4gICAgbGV0IGMxID0gbnVsbDsgLy8gY2hhcmFjdGVyIDFcbiAgICBsZXQgYzIgPSBudWxsOyAvLyBjaGFyYWN0ZXIgMlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYzEgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxO1xuICAgICAgICB9IGVsc2UgaWYgKGMxIDwgMjA0OCkge1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiA2IHwgMTkyO1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSAmIDYzIHwgMTI4O1xuICAgICAgICB9IGVsc2UgaWYgKChjMSAmIDB4RkMwMCkgPT09IDB4RDgwMCAmJiAoKGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpKSAmIDB4RkMwMCkgPT09IDB4REMwMCkge1xuICAgICAgICAgICAgYzEgPSAweDEwMDAwICsgKChjMSAmIDB4MDNGRikgPDwgMTApICsgKGMyICYgMHgwM0ZGKTtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gMTggfCAyNDA7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDEyICYgNjMgfCAxMjg7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDYgJiA2MyB8IDEyODtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgJiA2MyB8IDEyODtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gMTIgfCAyMjQ7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDYgJiA2MyB8IDEyODtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgJiA2MyB8IDEyODtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX29mZnNldCAtIHN0YXJ0O1xufVxuXG4vKipcbiAqIOaooeaLnzY05L2N5pWw5a2X77yM5aSE55CG6LaF6L+HdWludDMy55qE5oOF5Ya1XG4gKlxuICogQGNsYXNzIExvbmdCaXRzXG4gKi9cbmNsYXNzIExvbmdCaXRzIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExvbmdCaXRzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsbyDkvY4zMuS9jeWAvFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaSDpq5gzMuS9jeWAvFxuICAgICAqIEBtZW1iZXJvZiBMb25nQml0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxvLCBoaSkge1xuICAgICAgICB0aGlzLmxvID0gbG8gPj4+IDA7XG4gICAgICAgIHRoaXMuaGkgPSBoaSA+Pj4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6K6h566X5omA5Y2g5a2X6IqC5pWwXG4gICAgICogQHJldHVybnMge251bWJlcn0g5a2X6IqC5pWwXG4gICAgICogQG1lbWJlcm9mIExvbmdCaXRzXG4gICAgICovXG4gICAgbGVuZ3RoKCkge1xuICAgICAgICBjb25zdCBwYXJ0MCA9IHRoaXMubG87XG4gICAgICAgIGNvbnN0IHBhcnQxID0gKHRoaXMubG8gPj4+IDI4IHwgdGhpcy5oaSA8PCA0KSA+Pj4gMDtcbiAgICAgICAgY29uc3QgcGFydDIgPSB0aGlzLmhpID4+PiAyNDtcblxuICAgICAgICByZXR1cm4gcGFydDIgPT09IDBcbiAgICAgICAgICAgID8gcGFydDEgPT09IDBcbiAgICAgICAgICAgICAgICA/IHBhcnQwIDwgMTYzODRcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJ0MCA8IDEyOCA/IDEgOiAyXG4gICAgICAgICAgICAgICAgICAgIDogcGFydDAgPCAyMDk3MTUyID8gMyA6IDRcbiAgICAgICAgICAgICAgICA6IHBhcnQxIDwgMTYzODRcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJ0MSA8IDEyOCA/IDUgOiA2XG4gICAgICAgICAgICAgICAgICAgIDogcGFydDEgPCAyMDk3MTUyID8gNyA6IDhcbiAgICAgICAgICAgIDogcGFydDIgPCAxMjggPyA5IDogMTA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi9rOWMluS4uuaZrumAmuaVsOWtl1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Vuc2lnbmVkPWZhbHNlXSB1bnNpZ25lZD9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBMb25nQml0c1xuICAgICAqL1xuICAgIHRvTnVtYmVyKHVuc2lnbmVkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF1bnNpZ25lZCAmJiB0aGlzLmhpID4+PiAzMSkge1xuICAgICAgICAgICAgY29uc3QgbG8gPSB+dGhpcy5sbyArIDEgPj4+IDA7XG4gICAgICAgICAgICBsZXQgaGkgPSB+dGhpcy5oaSA+Pj4gMDtcbiAgICAgICAgICAgIGlmICghbG8pXG4gICAgICAgICAgICAgICAgaGkgPSBoaSArIDEgPj4+IDA7XG4gICAgICAgICAgICByZXR1cm4gLShsbyArIGhpICogNDI5NDk2NzI5Nik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG8gKyB0aGlzLmhpICogNDI5NDk2NzI5NjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja52YWx1ZeWIm+W7uuS4gOS4qkxvbmdCaXRzXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOimgei9rOaNoueahOWAvFxuICAgICAqIEByZXR1cm5zIHtMb25nQml0c30gTG9uZ0JpdHPlrp7kvotcbiAgICAgKiBAbWVtYmVyb2YgTG9uZ0JpdHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHNpZ24gPSBfdmFsdWUgPCAwO1xuXG4gICAgICAgIGlmIChzaWduKVxuICAgICAgICAgICAgX3ZhbHVlID0gLV92YWx1ZTtcblxuICAgICAgICBsZXQgbG8gPSBfdmFsdWUgPj4+IDA7XG4gICAgICAgIGxldCBoaSA9IChfdmFsdWUgLSBsbykgLyA0Mjk0OTY3Mjk2ID4+PiAwO1xuXG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgICBoaSA9IH5oaSA+Pj4gMDtcbiAgICAgICAgICAgIGxvID0gfmxvID4+PiAwO1xuICAgICAgICAgICAgaWYgKCsrbG8gPiA0Mjk0OTY3Mjk1KSB7XG4gICAgICAgICAgICAgICAgbG8gPSAwO1xuICAgICAgICAgICAgICAgIGlmICgrK2hpID4gNDI5NDk2NzI5NSlcbiAgICAgICAgICAgICAgICAgICAgaGkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBMb25nQml0cyhsbywgaGkpO1xuICAgIH1cbn1cblxuLy8gMiAqKiAzMiAtIDFcbmNvbnN0IE1BWF9VSU5UMzIgPSA0Mjk0OTY3Mjk1O1xuXG4vKipcbiAqIGJ1ZmZlcuivu+WPlui2iueVjOmUmeivr1xuICpcbiAqIEBwYXJhbSB7UmVhZGVyfSByZWFkZXIgUmVhZGVy5a6e5L6LXG4gKiBAcGFyYW0ge251bWJlcn0gd3JpdGVsZW5ndGgg6ZW/5bqmXG4gKiBAcmV0dXJucyB7UmFuZ2VFcnJvcn0g5YW35L2T6ZSZ6K+vXG4gKi9cbmZ1bmN0aW9uIGluZGV4T3V0T2ZSYW5nZShyZWFkZXIsIHdyaXRlbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFJhbmdlRXJyb3IoYHByb3RvYnVmIHJlYWRlciBpbmRleCBvdXQgb2YgcmFuZ2U6ICR7cmVhZGVyLnBvc30gKyAke3dyaXRlbGVuZ3RoIHx8IDF9ID4gJHtyZWFkZXIubGVufWApO1xufVxuXG5mdW5jdGlvbiByZWFkTG9uZ1ZhcmludCgpIHtcbiAgICBjb25zdCBiaXRzID0gbmV3IExvbmdCaXRzKDAsIDApO1xuICAgIGxldCBpID0gMDtcbiAgICBpZiAodGhpcy5sZW4gLSB0aGlzLnBvcyA+IDQpIHtcbiAgICAgICAgZm9yICg7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgICAgIC8vIDFzdC4uNHRoXG4gICAgICAgICAgICBiaXRzLmxvID0gKGJpdHMubG8gfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA8PCBpICogNykgPj4+IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpdHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNXRoXG4gICAgICAgIGJpdHMubG8gPSAoYml0cy5sbyB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IDI4KSA+Pj4gMDtcbiAgICAgICAgYml0cy5oaSA9IChiaXRzLmhpIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPj4gNCkgPj4+IDA7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOClcbiAgICAgICAgICAgIHJldHVybiBiaXRzO1xuICAgICAgICBpID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKDsgaSA8IDM7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zID49IHRoaXMubGVuKVxuICAgICAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzKTtcbiAgICAgICAgICAgIC8vIDFzdC4uM3RoXG4gICAgICAgICAgICBiaXRzLmxvID0gKGJpdHMubG8gfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA8PCBpICogNykgPj4+IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpdHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNHRoXG4gICAgICAgIGJpdHMubG8gPSAoYml0cy5sbyB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSAmIDEyNykgPDwgaSAqIDcpID4+PiAwO1xuICAgICAgICByZXR1cm4gYml0cztcbiAgICB9XG4gICAgaWYgKHRoaXMubGVuIC0gdGhpcy5wb3MgPiA0KSB7XG4gICAgICAgIGZvciAoOyBpIDwgNTsgKytpKSB7XG4gICAgICAgICAgICAvLyA2dGguLjEwdGhcbiAgICAgICAgICAgIGJpdHMuaGkgPSAoYml0cy5oaSB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IGkgKiA3ICsgMykgPj4+IDA7XG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpdHM7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKDsgaSA8IDU7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zID49IHRoaXMubGVuKVxuICAgICAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzKTtcbiAgICAgICAgICAgIC8vIDZ0aC4uMTB0aFxuICAgICAgICAgICAgYml0cy5oaSA9IChiaXRzLmhpIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgaSAqIDcgKyAzKSA+Pj4gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOClcbiAgICAgICAgICAgICAgICByZXR1cm4gYml0cztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBFcnJvcignaW52YWxpZCB2YXJpbnQgZW5jb2RpbmcnKTtcbn1cblxuLyoqXG4gKiDop6PnoIHnsbtcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUmVhZGVyXG4gKi9cbmNsYXNzIFJlYWRlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBSZWFkZXIuXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIg5Y6f5aeLYnVmZmVyXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJ1ZmZlcikge1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgdGhpcy5wb3MgPSAwO1xuICAgICAgICB0aGlzLmxlbiA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu6UmVhZGVy5a6e5L6LXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIg5Y6f5aeLYnVmZmVyXG4gICAgICogQHJldHVybnMge1JlYWRlcn0gUmVhZGVy5a6e5L6LXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoYnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVhZGVyKGJ1ZmZlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5LiqdWludDMyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDor7vlj5bnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgdWludDMyKCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBNQVhfVUlOVDMyO1xuXG4gICAgICAgIHZhbHVlID0gKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPj4+IDA7IGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IDcpID4+PiAwOyBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA8PCAxNCkgPj4+IDA7IGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IDIxKSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDE1KSA8PCAyOCkgPj4+IDA7IGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIHRoaXMucG9zICs9IDU7XG4gICAgICAgIGlmICh0aGlzLnBvcyA+IHRoaXMubGVuKSB7XG4gICAgICAgICAgICB0aGlzLnBvcyA9IHRoaXMubGVuO1xuICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5LiqaW50MzJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBpbnQzMigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWludDMyKCkgfCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qnN1aW50MzJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBzaW50MzIoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy51aW50MzIoKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID4+PiAxIF4gLSh2YWx1ZSAmIDEpIHwgMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKp1aW50NjRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICB1aW50NjQoKSB7XG4gICAgICAgIHJldHVybiByZWFkTG9uZ1ZhcmludC5jYWxsKHRoaXMpLnRvTnVtYmVyKHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qmludDY0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDor7vlj5bnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgaW50NjQoKSB7XG4gICAgICAgIHJldHVybiByZWFkTG9uZ1ZhcmludC5jYWxsKHRoaXMpLnRvTnVtYmVyKGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKpib29sXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIGJvb2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpbnQzMigpICE9PSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOautWJ1ZmZlclxuICAgICAqXG4gICAgICogQHJldHVybnMge1VpbnQ4QXJyYXl9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBieXRlcygpIHtcbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy51aW50MzIoKTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnBvcztcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5wb3MgKyBsZW47XG5cbiAgICAgICAgaWYgKGVuZCA+IHRoaXMubGVuKVxuICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMsIGxlbik7XG5cbiAgICAgICAgdGhpcy5wb3MgPSBlbmQ7XG5cbiAgICAgICAgLy8g55Soc3ViYXJyYXnogIzkuI3mmK9zbGljZe+8jOmYsuatouWOn+aVsOe7hOiiq+aEj+WkluS/ruaUuVxuICAgICAgICByZXR1cm4gdGhpcy5idWZmZXIuc3ViYXJyYXkoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgc3RyaW5nKCkge1xuICAgICAgICBjb25zdCBieXRlcyA9IHRoaXMuYnl0ZXMoKTtcbiAgICAgICAgcmV0dXJuIHJlYWQoYnl0ZXMsIDAsIGJ5dGVzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Lez6L+H5LiA5q616ZW/5bqmXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuIOi3s+i/h+eahOWtl+iKguaVsFxuICAgICAqIEByZXR1cm5zIHtSZWFkZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgc2tpcChsZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsZW4gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3MgKyBsZW4gPiB0aGlzLmxlbilcbiAgICAgICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgbGVuKTtcbiAgICAgICAgICAgIHRoaXMucG9zICs9IGxlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3MgPj0gdGhpcy5sZW4pXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdICYgMTI4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDot7Pov4fkuIDnp43nsbvlnotcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aXJlVHlwZSDot7Pov4fnmoTnsbvlnotcbiAgICAgKiBAcmV0dXJucyB7UmVhZGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHNraXBUeXBlKHdpcmVUeXBlKSB7XG4gICAgICAgIHN3aXRjaCAod2lyZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNraXAoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnNraXAoOCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwKHRoaXMudWludDMyKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgbGV0IF93aXJlVHlwZSA9IHRoaXMudWludDMyKCkgJiA3O1xuICAgICAgICAgICAgICAgIHdoaWxlIChfd2lyZVR5cGUgIT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5za2lwVHlwZShfd2lyZVR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBfd2lyZVR5cGUgPSB0aGlzLnVpbnQzMigpICYgNztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwKDQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBpbnZhbGlkIHdpcmUgdHlwZSAke3dpcmVUeXBlfSBhdCBvZmZzZXQgJHt0aGlzLnBvc31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbi8qKlxuICog56m65Ye95pWwXG4gKlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgICAvLyBlbXB0eVxufVxuXG4vKipcbiAqIOWGmeS4gOS4qmJ5dGXliLBidWZmZXJcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg6KaB5YaZ5YWl55qE5YC8XG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDooqvlhpnlhaXnmoRidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3Mg5YaZ5YWl5L2N572uXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiB3cml0ZUJ5dGUodmFsdWUsIGJ1ZmZlciwgcG9zKSB7XG4gICAgYnVmZmVyW3Bvc10gPSB2YWx1ZSAmIDI1NTtcbn1cblxuLyoqXG4gKiDlhpnkuIDmrrVidWZmZXLliLBidWZmZXJcbiAqXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHZhbHVlIOimgeWGmeWFpeeahOWtkGJ1ZmZlclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIg6KKr5YaZ5YWl55qEYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIOWGmeWFpeS9jee9rlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gd3JpdGVCeXRlcyh2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICBidWZmZXIuc2V0KHZhbHVlLCBwb3MpO1xufVxuXG4vKipcbiAqIOWGmeWFpeS4gOS4quWPmOmVv+eahOi0n+aVsOWIsGJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDopoHlhpnlhaXnmoTlgLxcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIOiiq+WGmeWFpeeahGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyDlhpnlhaXkvY3nva5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIHdyaXRlVmFyaW50NjQodmFsdWUsIGJ1ZmZlciwgcG9zKSB7XG4gICAgbGV0IF9wb3MgPSBwb3M7XG5cbiAgICB3aGlsZSAodmFsdWUuaGkpIHtcbiAgICAgICAgYnVmZmVyW19wb3MrK10gPSB2YWx1ZS5sbyAmIDEyNyB8IDEyODtcbiAgICAgICAgdmFsdWUubG8gPSAodmFsdWUubG8gPj4+IDcgfCB2YWx1ZS5oaSA8PCAyNSkgPj4+IDA7XG4gICAgICAgIHZhbHVlLmhpID4+Pj0gNztcbiAgICB9XG4gICAgd2hpbGUgKHZhbHVlLmxvID4gMTI3KSB7XG4gICAgICAgIGJ1ZmZlcltfcG9zKytdID0gdmFsdWUubG8gJiAxMjcgfCAxMjg7XG4gICAgICAgIHZhbHVlLmxvID0gdmFsdWUubG8gPj4+IDc7XG4gICAgfVxuICAgIGJ1ZmZlcltfcG9zKytdID0gdmFsdWUubG87XG59XG5cbi8qKlxuICog5YaZ5YWl5YC85YiwYnVmZmVy55qE5pON5L2cXG4gKlxuICogQGNsYXNzIE9wXG4gKi9cbmNsYXNzIE9wIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE9wLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIOWFt+S9k+eahOaTjeS9nOWHveaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW4g6ZW/5bqmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWFt+S9k+eahOWAvFxuICAgICAqIEBtZW1iZXJvZiBPcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZuLCBsZW4sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG59XG5cbi8qKlxuICog5YaZ5YWl5LiA5Liq5Y+Y6ZW/57yW56CB5YC855qE5pON5L2cXG4gKlxuICogQGNsYXNzIFZhcmludE9wXG4gKiBAZXh0ZW5kcyB7T3B9XG4gKi9cbmNsYXNzIFZhcmludE9wIGV4dGVuZHMgT3Age1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVmFyaW50T3AuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YW35L2T55qE5YC8XG4gICAgICogQG1lbWJlcm9mIFZhcmludE9wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobGVuLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5mbiA9IGZ1bmN0aW9uIHdyaXRlVmFyaW50MzIodmFsdWUsIGJ1ZmZlciwgcG9zKSB7XG4gICAgICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBsZXQgX3BvcyA9IHBvcztcblxuICAgICAgICAgICAgd2hpbGUgKF92YWx1ZSA+IDEyNykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlcltfcG9zKytdID0gX3ZhbHVlICYgMTI3IHwgMTI4O1xuICAgICAgICAgICAgICAgIF92YWx1ZSA+Pj49IDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWZmZXJbX3Bvc10gPSBfdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIOeKtuaAgVxuICpcbiAqIEBjbGFzcyBTdGF0ZVxuICovXG5jbGFzcyBTdGF0ZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBTdGF0ZS5cbiAgICAgKiBAcGFyYW0ge1dyaXRlcn0gd3JpdGVyIFdyaXRlcuWunuS+i1xuICAgICAqIEBtZW1iZXJvZiBTdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHdyaXRlcikge1xuICAgICAgICB0aGlzLmhlYWQgPSB3cml0ZXIuaGVhZDtcbiAgICAgICAgdGhpcy50YWlsID0gd3JpdGVyLnRhaWw7XG4gICAgICAgIHRoaXMubGVuID0gd3JpdGVyLmxlbjtcbiAgICAgICAgdGhpcy5uZXh0ID0gd3JpdGVyLnN0YXRlcztcbiAgICB9XG59XG5cbi8qKlxuICog57yW56CB57G7XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFdyaXRlclxuICovXG5jbGFzcyBXcml0ZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgV3JpdGVyLlxuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZW4gPSAwO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXcgT3Aobm9vcCwgMCwgMCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uldyaXRlcuWunuS+i1xuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IFdyaXRlcuWunuS+i1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFdyaXRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmTvuihqFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g5pON5L2c5Ye95pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBfcHVzaChmbiwgbGVuLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwubmV4dCA9IG5ldyBPcChmbiwgbGVuLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGVuICs9IGxlbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5LiqdWludDMy5Yiw5b2T5YmN5L2N572uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICB1aW50MzIodmFsdWUpIHtcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgPj4+IDA7XG5cbiAgICAgICAgY29uc3Qgb3AgPSBuZXcgVmFyaW50T3AoXG4gICAgICAgICAgICBfdmFsdWUgPCAxMjggPyAxXG4gICAgICAgICAgICAgICAgOiBfdmFsdWUgPCAxNjM4NCA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiBfdmFsdWUgPCAyMDk3MTUyID8gM1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdmFsdWUgPCAyNjg0MzU0NTYgPyA0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA1LFxuICAgICAgICAgICAgX3ZhbHVlKTtcblxuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwubmV4dCA9IG9wO1xuICAgICAgICB0aGlzLmxlbiArPSBvcC5sZW47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5LiqaW50MzLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGludDMyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDBcbiAgICAgICAgICAgID8gdGhpcy5fcHVzaCh3cml0ZVZhcmludDY0LCAxMCwgTG9uZ0JpdHMuZnJvbU51bWJlcih2YWx1ZSkpIC8vIDEwIGJ5dGVzIHBlciBzcGVjXG4gICAgICAgICAgICA6IHRoaXMudWludDMyKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKpzaW50MzLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHNpbnQzMih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy51aW50MzIoKHZhbHVlIDw8IDEgXiB2YWx1ZSA+PiAzMSkgPj4+IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlhpnkuIDkuKp1aW50NjTliLDlvZPliY3kvY3nva5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICB1aW50NjQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgYml0cyA9IExvbmdCaXRzLmZyb21OdW1iZXIodmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZVZhcmludDY0LCBiaXRzLmxlbmd0aCgpLCBiaXRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5YaZ5LiA5LiqaW50NjTliLDlvZPliY3kvY3nva5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBpbnQ2NCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnVpbnQ2NCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5LiqYm9vbOWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGJvb2wodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1c2god3JpdGVCeXRlLCAxLCB2YWx1ZSA/IDEgOiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDmrrXlrZBidWZmZXLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBieXRlcyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBsZW4gPSB2YWx1ZS5sZW4gPj4+IDA7XG5cbiAgICAgICAgaWYgKCFsZW4pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVpbnQzMihsZW4pLl9wdXNoKHdyaXRlQnl0ZXMsIGxlbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeS4gOS4snN0cmluZ+WIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgc3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgICAgICAgID8gdGhpcy51aW50MzIobGVuKS5fcHVzaCh3cml0ZSwgbGVuLCB2YWx1ZSlcbiAgICAgICAgICAgIDogdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZvcmtcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgZm9yaygpIHtcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBuZXcgU3RhdGUodGhpcyk7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG5ldyBPcChub29wLCAwLCAwKTtcbiAgICAgICAgdGhpcy5sZW4gPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNldFxuICAgICAqXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnN0YXRlcy5oZWFkO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5zdGF0ZXMudGFpbDtcbiAgICAgICAgICAgIHRoaXMubGVuID0gdGhpcy5zdGF0ZXMubGVuO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnN0YXRlcy5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbmV3IE9wKG5vb3AsIDAsIDApO1xuICAgICAgICAgICAgdGhpcy5sZW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxkZWxpbVxuICAgICAqXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBsZGVsaW0oKSB7XG4gICAgICAgIGNvbnN0IHsgaGVhZCwgdGFpbCwgbGVuIH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKS51aW50MzIobGVuKTtcbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBoZWFkLm5leHQ7IC8vIHNraXAgbm9vcFxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGFpbDtcbiAgICAgICAgICAgIHRoaXMubGVuICs9IGxlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnlhaXnu5PmnZ/vvIzlvIDlp4vnvJbnoIFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fSDnvJbnoIHnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgZmluaXNoKCkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbik7XG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5oZWFkLm5leHQ7IC8vIHNraXAgbm9vcFxuICAgICAgICBsZXQgcG9zID0gMDtcblxuICAgICAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgICAgICAgaGVhZC5mbihoZWFkLnZhbHVlLCBidWZmZXIsIHBvcyk7XG4gICAgICAgICAgICBwb3MgKz0gaGVhZC5sZW47XG4gICAgICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG59XG5cbi8vICRwcm90b2J1Zi4kdXRpbCBwb2x5ZmlsbFxuXG52YXIgdXRpbCA9IHtcbiAgICBlbXB0eUFycmF5OiBbXSxcbiAgICBlbXB0eU9iamVjdDoge30sXG4gICAgUHJvdG9jb2xFcnJvciguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoLi4uYXJncyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIG5ldyBidWZmZXJcbiAgICAgKiBAZGF0ZSAyMDE4LTEwLTMwXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IHNpemVPckFycmF5IGJ1ZmZlciBzaXplIG9yIG51bWJlciBhcnJheVxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxuICAgICAqL1xuICAgIG5ld0J1ZmZlcihzaXplT3JBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc2l6ZU9yQXJyYXkpO1xuICAgIH1cbn07XG5cbi8vICRwcm90b2J1Zi5yb290cyBwb2x5ZmlsbFxudmFyIHJvb3RzID0ge307XG5cbmNvbnN0ICRwcm90b2J1ZiA9IHtcbiAgICBSZWFkZXIsXG4gICAgV3JpdGVyLFxuICAgIHV0aWwsXG4gICAgcm9vdHNcbn07XG5cbnR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cuJHByb3RvYnVmID0gJHByb3RvYnVmKTtcblxubW9kdWxlLmV4cG9ydHMgPSAkcHJvdG9idWY7XG4iXX0=
