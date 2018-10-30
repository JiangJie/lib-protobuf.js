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
} // 2 ** 32 - 1


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
     * 从当前位置读一个bool
     *
     * @returns {boolean} 赌气结果
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
   * 根据value创建一个LongBits
   *
   * @static
   * @param {number} value 要转换的值
   * @returns {LongBits} LongBits实例
   * @memberof LongBits
   */


  (0, _createClass2.default)(LongBits, null, [{
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
}();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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R0FBaUIsU0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiDorqHnrpd1dGY457yW56CB55qE5a2X56ym5Liy6ZW/5bqmXG4gKlxuICogQGV4cG9ydHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcg6KaB6K6h566X55qE5a2X56ym5LiyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSDplb/luqZcbiAqL1xuZnVuY3Rpb24gbGVuZ3RoKHN0cmluZykge1xuICAgIGxldCBsZW4gPSAwO1xuICAgIGxldCBjID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMTI4KVxuICAgICAgICAgICAgbGVuICs9IDE7XG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KVxuICAgICAgICAgICAgbGVuICs9IDI7XG4gICAgICAgIGVsc2UgaWYgKChjICYgMHhGQzAwKSA9PT0gMHhEODAwICYmIChzdHJpbmcuY2hhckNvZGVBdChpICsgMSkgJiAweEZDMDApID09PSAweERDMDApIHtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIGxlbiArPSA0O1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGxlbiArPSAzO1xuICAgIH1cbiAgICByZXR1cm4gbGVuO1xufVxuXG4vKipcbiAqIFJlYWRzIFVURjggYnl0ZXMgYXMgYSBzdHJpbmcuXG4gKiBAZXhwb3J0c1xuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIgU291cmNlIGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFNvdXJjZSBzdGFydFxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBTb3VyY2UgZW5kXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBTdHJpbmcgcmVhZFxuICovXG5mdW5jdGlvbiByZWFkKGJ1ZmZlciwgc3RhcnQsIGVuZCkge1xuICAgIGxldCBfc3RhcnQgPSBzdGFydDtcbiAgICBjb25zdCBsZW4gPSBlbmQgLSBfc3RhcnQ7XG4gICAgaWYgKGxlbiA8IDEpXG4gICAgICAgIHJldHVybiAnJztcblxuICAgIGxldCBwYXJ0cyA9IG51bGw7XG4gICAgY29uc3QgY2h1bmsgPSBbXTtcbiAgICBsZXQgaSA9IDA7IC8vIGNoYXIgb2Zmc2V0XG4gICAgbGV0IHQgPSBudWxsOyAvLyB0ZW1wb3JhcnlcblxuICAgIHdoaWxlIChfc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgdCA9IGJ1ZmZlcltfc3RhcnQrK107XG4gICAgICAgIGlmICh0IDwgMTI4KVxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IHQ7XG4gICAgICAgIGVsc2UgaWYgKHQgPiAxOTEgJiYgdCA8IDIyNClcbiAgICAgICAgICAgIGNodW5rW2krK10gPSAodCAmIDMxKSA8PCA2IHwgYnVmZmVyW19zdGFydCsrXSAmIDYzO1xuICAgICAgICBlbHNlIGlmICh0ID4gMjM5ICYmIHQgPCAzNjUpIHtcbiAgICAgICAgICAgIHQgPSAoKHQgJiA3KSA8PCAxOCB8IChidWZmZXJbX3N0YXJ0KytdICYgNjMpIDw8IDEyIHwgKGJ1ZmZlcltfc3RhcnQrK10gJiA2MykgPDwgNiB8IGJ1ZmZlcltfc3RhcnQrK10gJiA2MykgLSAweDEwMDAwO1xuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IDB4RDgwMCArICh0ID4+IDEwKTtcbiAgICAgICAgICAgIGNodW5rW2krK10gPSAweERDMDAgKyAodCAmIDEwMjMpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGNodW5rW2krK10gPSAodCAmIDE1KSA8PCAxMiB8IChidWZmZXJbX3N0YXJ0KytdICYgNjMpIDw8IDYgfCBidWZmZXJbX3N0YXJ0KytdICYgNjM7XG4gICAgICAgIGlmIChpID4gODE5MSkge1xuICAgICAgICAgICAgKHBhcnRzIHx8IChwYXJ0cyA9IFtdKSkucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2h1bmspKTtcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzKSB7XG4gICAgICAgIGlmIChpKVxuICAgICAgICAgICAgcGFydHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2h1bmsuc2xpY2UoMCwgaSkpKTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2h1bmsuc2xpY2UoMCwgaSkpO1xufVxuXG4vKipcbiAqIFdyaXRlcyBhIHN0cmluZyBhcyBVVEY4IGJ5dGVzLlxuICogQGV4cG9ydHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgU291cmNlIHN0cmluZ1xuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIgRGVzdGluYXRpb24gYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IERlc3RpbmF0aW9uIG9mZnNldFxuICogQHJldHVybnMge251bWJlcn0gQnl0ZXMgd3JpdHRlblxuICovXG5mdW5jdGlvbiB3cml0ZShzdHJpbmcsIGJ1ZmZlciwgb2Zmc2V0KSB7XG4gICAgbGV0IF9vZmZzZXQgPSBvZmZzZXQ7XG4gICAgY29uc3Qgc3RhcnQgPSBfb2Zmc2V0O1xuICAgIGxldCBjMSA9IG51bGw7IC8vIGNoYXJhY3RlciAxXG4gICAgbGV0IGMyID0gbnVsbDsgLy8gY2hhcmFjdGVyIDJcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGMxID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjMSA8IDEyOCkge1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMTtcbiAgICAgICAgfSBlbHNlIGlmIChjMSA8IDIwNDgpIHtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gNiB8IDE5MjtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgJiA2MyB8IDEyODtcbiAgICAgICAgfSBlbHNlIGlmICgoYzEgJiAweEZDMDApID09PSAweEQ4MDAgJiYgKChjMiA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSkgJiAweEZDMDApID09PSAweERDMDApIHtcbiAgICAgICAgICAgIGMxID0gMHgxMDAwMCArICgoYzEgJiAweDAzRkYpIDw8IDEwKSArIChjMiAmIDB4MDNGRik7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDE4IHwgMjQwO1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiAxMiAmIDYzIHwgMTI4O1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiA2ICYgNjMgfCAxMjg7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxICYgNjMgfCAxMjg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDEyIHwgMjI0O1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiA2ICYgNjMgfCAxMjg7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxICYgNjMgfCAxMjg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9vZmZzZXQgLSBzdGFydDtcbn1cblxuLy8gMiAqKiAzMiAtIDFcbmNvbnN0IE1BWF9VSU5UMzIgPSA0Mjk0OTY3Mjk1O1xuXG4vKipcbiAqIGJ1ZmZlcuivu+WPlui2iueVjOmUmeivr1xuICpcbiAqIEBwYXJhbSB7UmVhZGVyfSByZWFkZXIgUmVhZGVy5a6e5L6LXG4gKiBAcGFyYW0ge251bWJlcn0gd3JpdGVsZW5ndGgg6ZW/5bqmXG4gKiBAcmV0dXJucyB7UmFuZ2VFcnJvcn0g5YW35L2T6ZSZ6K+vXG4gKi9cbmZ1bmN0aW9uIGluZGV4T3V0T2ZSYW5nZShyZWFkZXIsIHdyaXRlbGVuZ3RoKSB7XG4gICAgcmV0dXJuIFJhbmdlRXJyb3IoYHByb3RvYnVmIHJlYWRlciBpbmRleCBvdXQgb2YgcmFuZ2U6ICR7cmVhZGVyLnBvc30gKyAke3dyaXRlbGVuZ3RoIHx8IDF9ID4gJHtyZWFkZXIubGVufWApO1xufVxuXG4vKipcbiAqIOino+eggeexu1xuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBSZWFkZXJcbiAqL1xuY2xhc3MgUmVhZGVyIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlYWRlci5cbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDljp/lp4tidWZmZXJcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYnVmZmVyKSB7XG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICB0aGlzLnBvcyA9IDA7XG4gICAgICAgIHRoaXMubGVuID0gYnVmZmVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7pSZWFkZXLlrp7kvotcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDljp/lp4tidWZmZXJcbiAgICAgKiBAcmV0dXJucyB7UmVhZGVyfSBSZWFkZXLlrp7kvotcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZShidWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkZXIoYnVmZmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKp1aW50MzJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IOivu+WPlue7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICB1aW50MzIoKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IE1BWF9VSU5UMzI7XG5cbiAgICAgICAgdmFsdWUgPSAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgNykgPj4+IDA7IGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpIDw8IDE0KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgMjEpID4+PiAwOyBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTUpIDw8IDI4KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG5cbiAgICAgICAgdGhpcy5wb3MgKz0gNTtcbiAgICAgICAgaWYgKHRoaXMucG9zID4gdGhpcy5sZW4pIHtcbiAgICAgICAgICAgIHRoaXMucG9zID0gdGhpcy5sZW47XG4gICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgMTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKppbnQzMlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIGludDMyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51aW50MzIoKSB8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5Liqc3VpbnQzMlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHNpbnQzMigpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnVpbnQzMigpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPj4+IDEgXiAtKHZhbHVlICYgMSkgfCAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qmJvb2xcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSDotYzmsJTnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgYm9vbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWludDMyKCkgIT09IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5q61YnVmZmVyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7VWludDhBcnJheX0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIGJ5dGVzKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnVpbnQzMigpO1xuICAgICAgICBjb25zdCBzdGFydCA9IHRoaXMucG9zO1xuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnBvcyArIGxlbjtcblxuICAgICAgICBpZiAoZW5kID4gdGhpcy5sZW4pXG4gICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcywgbGVuKTtcblxuICAgICAgICB0aGlzLnBvcyA9IGVuZDtcblxuICAgICAgICAvLyDnlKhzdWJhcnJheeiAjOS4jeaYr3NsaWNl77yM6Ziy5q2i5Y6f5pWw57uE6KKr5oSP5aSW5L+u5pS5XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5zdWJhcnJheShzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICBzdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5ieXRlcygpO1xuICAgICAgICByZXR1cm4gcmVhZChieXRlcywgMCwgYnl0ZXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDot7Pov4fkuIDmrrXplb/luqZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW4g6Lez6L+H55qE5a2X6IqC5pWwXG4gICAgICogQHJldHVybnMge1JlYWRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBza2lwKGxlbikge1xuICAgICAgICBpZiAodHlwZW9mIGxlbiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcyArIGxlbiA+IHRoaXMubGVuKVxuICAgICAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCBsZW4pO1xuICAgICAgICAgICAgdGhpcy5wb3MgKz0gbGVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvcyA+PSB0aGlzLmxlbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gJiAxMjgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi3s+i/h+S4gOenjeexu+Wei1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpcmVUeXBlIOi3s+i/h+eahOexu+Wei1xuICAgICAqIEByZXR1cm5zIHtSZWFkZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgc2tpcFR5cGUod2lyZVR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh3aXJlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCg4KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICB0aGlzLnNraXAodGhpcy51aW50MzIoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgICAgICBsZXQgX3dpcmVUeXBlID0gdGhpcy51aW50MzIoKSAmIDc7XG4gICAgICAgICAgICAgICAgd2hpbGUgKF93aXJlVHlwZSAhPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraXBUeXBlKF93aXJlVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIF93aXJlVHlwZSA9IHRoaXMudWludDMyKCkgJiA3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLnNraXAoNCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGludmFsaWQgd2lyZSB0eXBlICR7d2lyZVR5cGV9IGF0IG9mZnNldCAke3RoaXMucG9zfWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnqbrlh73mlbBcbiAqXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBub29wKCkge1xuICAgIC8vIGVtcHR5XG59XG5cbi8qKlxuICog5YaZ5LiA5LiqYnl0ZeWIsGJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDopoHlhpnlhaXnmoTlgLxcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIOiiq+WGmeWFpeeahGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyDlhpnlhaXkvY3nva5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIHdyaXRlQnl0ZSh2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICBidWZmZXJbcG9zXSA9IHZhbHVlICYgMjU1O1xufVxuXG4vKipcbiAqIOWGmeS4gOautWJ1ZmZlcuWIsGJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gdmFsdWUg6KaB5YaZ5YWl55qE5a2QYnVmZmVyXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDooqvlhpnlhaXnmoRidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3Mg5YaZ5YWl5L2N572uXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiB3cml0ZUJ5dGVzKHZhbHVlLCBidWZmZXIsIHBvcykge1xuICAgIGJ1ZmZlci5zZXQodmFsdWUsIHBvcyk7XG59XG5cbi8qKlxuICog5YaZ5YWl5LiA5Liq5Y+Y6ZW/55qE6LSf5pWw5YiwYnVmZmVyXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOimgeWGmeWFpeeahOWAvFxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIg6KKr5YaZ5YWl55qEYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIOWGmeWFpeS9jee9rlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gd3JpdGVWYXJpbnQ2NCh2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICBsZXQgX3BvcyA9IHBvcztcblxuICAgIHdoaWxlICh2YWx1ZS5oaSkge1xuICAgICAgICBidWZmZXJbX3BvcysrXSA9IHZhbHVlLmxvICYgMTI3IHwgMTI4O1xuICAgICAgICB2YWx1ZS5sbyA9ICh2YWx1ZS5sbyA+Pj4gNyB8IHZhbHVlLmhpIDw8IDI1KSA+Pj4gMDtcbiAgICAgICAgdmFsdWUuaGkgPj4+PSA3O1xuICAgIH1cbiAgICB3aGlsZSAodmFsdWUubG8gPiAxMjcpIHtcbiAgICAgICAgYnVmZmVyW19wb3MrK10gPSB2YWx1ZS5sbyAmIDEyNyB8IDEyODtcbiAgICAgICAgdmFsdWUubG8gPSB2YWx1ZS5sbyA+Pj4gNztcbiAgICB9XG4gICAgYnVmZmVyW19wb3MrK10gPSB2YWx1ZS5sbztcbn1cblxuLyoqXG4gKiDmqKHmi582NOS9jeaVsOWtl++8jOWkhOeQhui2hei/h3VpbnQzMueahOaDheWGtVxuICpcbiAqIEBjbGFzcyBMb25nQml0c1xuICovXG5jbGFzcyBMb25nQml0cyB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBMb25nQml0cy5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbG8g5L2OMzLkvY3lgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGkg6auYMzLkvY3lgLxcbiAgICAgKiBAbWVtYmVyb2YgTG9uZ0JpdHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsbywgaGkpIHtcbiAgICAgICAgdGhpcy5sbyA9IGxvID4+PiAwO1xuICAgICAgICB0aGlzLmhpID0gaGkgPj4+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2udmFsdWXliJvlu7rkuIDkuKpMb25nQml0c1xuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDopoHovazmjaLnmoTlgLxcbiAgICAgKiBAcmV0dXJucyB7TG9uZ0JpdHN9IExvbmdCaXRz5a6e5L6LXG4gICAgICogQG1lbWJlcm9mIExvbmdCaXRzXG4gICAgICovXG4gICAgc3RhdGljIGZyb21OdW1iZXIodmFsdWUpIHtcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBjb25zdCBzaWduID0gX3ZhbHVlIDwgMDtcblxuICAgICAgICBpZiAoc2lnbilcbiAgICAgICAgICAgIF92YWx1ZSA9IC1fdmFsdWU7XG5cbiAgICAgICAgbGV0IGxvID0gX3ZhbHVlID4+PiAwO1xuICAgICAgICBsZXQgaGkgPSAoX3ZhbHVlIC0gbG8pIC8gNDI5NDk2NzI5NiA+Pj4gMDtcblxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgICAgaGkgPSB+aGkgPj4+IDA7XG4gICAgICAgICAgICBsbyA9IH5sbyA+Pj4gMDtcbiAgICAgICAgICAgIGlmICgrK2xvID4gNDI5NDk2NzI5NSkge1xuICAgICAgICAgICAgICAgIGxvID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoKytoaSA+IDQyOTQ5NjcyOTUpXG4gICAgICAgICAgICAgICAgICAgIGhpID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTG9uZ0JpdHMobG8sIGhpKTtcbiAgICB9XG59XG5cbi8qKlxuICog5YaZ5YWl5YC85YiwYnVmZmVy55qE5pON5L2cXG4gKlxuICogQGNsYXNzIE9wXG4gKi9cbmNsYXNzIE9wIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE9wLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIOWFt+S9k+eahOaTjeS9nOWHveaVsFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZW4g6ZW/5bqmXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWFt+S9k+eahOWAvFxuICAgICAqIEBtZW1iZXJvZiBPcFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZuLCBsZW4sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm4gPSBmbjtcbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB9XG59XG5cbi8qKlxuICog5YaZ5YWl5LiA5Liq5Y+Y6ZW/57yW56CB5YC855qE5pON5L2cXG4gKlxuICogQGNsYXNzIFZhcmludE9wXG4gKiBAZXh0ZW5kcyB7T3B9XG4gKi9cbmNsYXNzIFZhcmludE9wIGV4dGVuZHMgT3Age1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgVmFyaW50T3AuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YW35L2T55qE5YC8XG4gICAgICogQG1lbWJlcm9mIFZhcmludE9wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobGVuLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV4dCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5mbiA9IGZ1bmN0aW9uIHdyaXRlVmFyaW50MzIodmFsdWUsIGJ1ZmZlciwgcG9zKSB7XG4gICAgICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBsZXQgX3BvcyA9IHBvcztcblxuICAgICAgICAgICAgd2hpbGUgKF92YWx1ZSA+IDEyNykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlcltfcG9zKytdID0gX3ZhbHVlICYgMTI3IHwgMTI4O1xuICAgICAgICAgICAgICAgIF92YWx1ZSA+Pj49IDc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWZmZXJbX3Bvc10gPSBfdmFsdWU7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIOeKtuaAgVxuICpcbiAqIEBjbGFzcyBTdGF0ZVxuICovXG5jbGFzcyBTdGF0ZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBTdGF0ZS5cbiAgICAgKiBAcGFyYW0ge1dyaXRlcn0gd3JpdGVyIFdyaXRlcuWunuS+i1xuICAgICAqIEBtZW1iZXJvZiBTdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHdyaXRlcikge1xuICAgICAgICB0aGlzLmhlYWQgPSB3cml0ZXIuaGVhZDtcbiAgICAgICAgdGhpcy50YWlsID0gd3JpdGVyLnRhaWw7XG4gICAgICAgIHRoaXMubGVuID0gd3JpdGVyLmxlbjtcbiAgICAgICAgdGhpcy5uZXh0ID0gd3JpdGVyLnN0YXRlcztcbiAgICB9XG59XG5cbi8qKlxuICog57yW56CB57G7XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFdyaXRlclxuICovXG5jbGFzcyBXcml0ZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgV3JpdGVyLlxuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZW4gPSAwO1xuICAgICAgICB0aGlzLmhlYWQgPSBuZXcgT3Aobm9vcCwgMCwgMCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMuaGVhZDtcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uldyaXRlcuWunuS+i1xuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IFdyaXRlcuWunuS+i1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFdyaXRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmTvuihqFxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g5pON5L2c5Ye95pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBfcHVzaChmbiwgbGVuLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwubmV4dCA9IG5ldyBPcChmbiwgbGVuLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGVuICs9IGxlbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5LiqdWludDMy5Yiw5b2T5YmN5L2N572uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICB1aW50MzIodmFsdWUpIHtcbiAgICAgICAgbGV0IF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBfdmFsdWUgPSBfdmFsdWUgPj4+IDA7XG5cbiAgICAgICAgY29uc3Qgb3AgPSBuZXcgVmFyaW50T3AoXG4gICAgICAgICAgICBfdmFsdWUgPCAxMjggPyAxXG4gICAgICAgICAgICAgICAgOiBfdmFsdWUgPCAxNjM4NCA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiBfdmFsdWUgPCAyMDk3MTUyID8gM1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdmFsdWUgPCAyNjg0MzU0NTYgPyA0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA1LFxuICAgICAgICAgICAgX3ZhbHVlKTtcblxuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwubmV4dCA9IG9wO1xuICAgICAgICB0aGlzLmxlbiArPSBvcC5sZW47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5LiqaW50MzLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGludDMyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDBcbiAgICAgICAgICAgID8gdGhpcy5fcHVzaCh3cml0ZVZhcmludDY0LCAxMCwgTG9uZ0JpdHMuZnJvbU51bWJlcih2YWx1ZSkpIC8vIDEwIGJ5dGVzIHBlciBzcGVjXG4gICAgICAgICAgICA6IHRoaXMudWludDMyKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKpzaW50MzLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHNpbnQzMih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy51aW50MzIoKHZhbHVlIDw8IDEgXiB2YWx1ZSA+PiAzMSkgPj4+IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeS4gOS4qmJvb2zliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBib29sKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXNoKHdyaXRlQnl0ZSwgMSwgdmFsdWUgPyAxIDogMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5q615a2QYnVmZmVy5Yiw5b2T5YmN5L2N572uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgYnl0ZXModmFsdWUpIHtcbiAgICAgICAgY29uc3QgbGVuID0gdmFsdWUubGVuID4+PiAwO1xuXG4gICAgICAgIGlmICghbGVuKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3B1c2god3JpdGVCeXRlLCAxLCAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcy51aW50MzIobGVuKS5fcHVzaCh3cml0ZUJ5dGVzLCBsZW4sIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuLJzdHJpbmfliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHN0cmluZyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBsZW4gPSBsZW5ndGgodmFsdWUpO1xuICAgICAgICByZXR1cm4gbGVuXG4gICAgICAgICAgICA/IHRoaXMudWludDMyKGxlbikuX3B1c2god3JpdGUsIGxlbiwgdmFsdWUpXG4gICAgICAgICAgICA6IHRoaXMuX3B1c2god3JpdGVCeXRlLCAxLCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmb3JrXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGZvcmsoKSB7XG4gICAgICAgIHRoaXMuc3RhdGVzID0gbmV3IFN0YXRlKHRoaXMpO1xuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBuZXcgT3Aobm9vcCwgMCwgMCk7XG4gICAgICAgIHRoaXMubGVuID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlcykge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy5zdGF0ZXMuaGVhZDtcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMuc3RhdGVzLnRhaWw7XG4gICAgICAgICAgICB0aGlzLmxlbiA9IHRoaXMuc3RhdGVzLmxlbjtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzID0gdGhpcy5zdGF0ZXMubmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG5ldyBPcChub29wLCAwLCAwKTtcbiAgICAgICAgICAgIHRoaXMubGVuID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsZGVsaW1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgbGRlbGltKCkge1xuICAgICAgICBjb25zdCB7IGhlYWQsIHRhaWwsIGxlbiB9ID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCkudWludDMyKGxlbik7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGFpbC5uZXh0ID0gaGVhZC5uZXh0OyAvLyBza2lwIG5vb3BcbiAgICAgICAgICAgIHRoaXMudGFpbCA9IHRhaWw7XG4gICAgICAgICAgICB0aGlzLmxlbiArPSBsZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5YWl57uT5p2f77yM5byA5aeL57yW56CBXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7VWludDhBcnJheX0g57yW56CB57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGZpbmlzaCgpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW4pO1xuICAgICAgICBsZXQgaGVhZCA9IHRoaXMuaGVhZC5uZXh0OyAvLyBza2lwIG5vb3BcbiAgICAgICAgbGV0IHBvcyA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgICAgICAgIGhlYWQuZm4oaGVhZC52YWx1ZSwgYnVmZmVyLCBwb3MpO1xuICAgICAgICAgICAgcG9zICs9IGhlYWQubGVuO1xuICAgICAgICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxufVxuXG4vLyAkcHJvdG9idWYuJHV0aWwgcG9seWZpbGxcblxudmFyIHV0aWwgPSB7XG4gICAgZW1wdHlBcnJheTogW10sXG4gICAgUHJvdG9jb2xFcnJvciguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoLi4uYXJncyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyBhIG5ldyBidWZmZXJcbiAgICAgKiBAZGF0ZSAyMDE4LTEwLTMwXG4gICAgICogQHBhcmFtIHtudW1iZXJ8bnVtYmVyW119IHNpemVPckFycmF5IGJ1ZmZlciBzaXplIG9yIG51bWJlciBhcnJheVxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fVxuICAgICAqL1xuICAgIG5ld0J1ZmZlcihzaXplT3JBcnJheSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc2l6ZU9yQXJyYXkpO1xuICAgIH1cbn07XG5cbi8vICRwcm90b2J1Zi5yb290cyBwb2x5ZmlsbFxudmFyIHJvb3RzID0ge307XG5cbmNvbnN0ICRwcm90b2J1ZiA9IHtcbiAgICBSZWFkZXIsXG4gICAgV3JpdGVyLFxuICAgIHV0aWwsXG4gICAgcm9vdHNcbn07XG5cbnR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cuJHByb3RvYnVmID0gJHByb3RvYnVmKTtcblxubW9kdWxlLmV4cG9ydHMgPSAkcHJvdG9idWY7XG4iXX0=
