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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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WSxJQUFaO0FBQ0EsYUFBSyxHQUFMLElBQVksR0FBWjtBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs2QkFNUztBQUNMLFlBQU0sTUFBTSxHQUFHLElBQUksVUFBSixDQUFlLEtBQUssR0FBcEIsQ0FBZjtBQUNBLFVBQUksSUFBSSxHQUFHLEtBQUssSUFBTCxDQUFVLElBQXJCLENBRkssQ0FFc0I7O0FBQzNCLFVBQUksR0FBRyxHQUFHLENBQVY7O0FBRUEsYUFBTyxJQUFQLEVBQWE7QUFDVCxRQUFBLElBQUksQ0FBQyxFQUFMLENBQVEsSUFBSSxDQUFDLEtBQWIsRUFBb0IsTUFBcEIsRUFBNEIsR0FBNUI7QUFDQSxRQUFBLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBWjtBQUNBLFFBQUEsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFaO0FBQ0gsT0FUSSxDQVVMOzs7QUFFQSxhQUFPLE1BQVA7QUFDSDs7OzZCQWxMZTtBQUNaLGFBQU8sSUFBSSxNQUFKLEVBQVA7QUFDSDs7O0tBbUxMOzs7QUFFQSxJQUFJLElBQUksR0FBRztBQUNQLEVBQUEsVUFBVSxFQUFFLEVBREw7O0FBRVAsRUFBQSxhQUFhLEdBQVU7QUFBQSxzQ0FBTixJQUFNO0FBQU4sTUFBQSxJQUFNO0FBQUE7O0FBQ25CLFdBQU8sSUFBSSxLQUFKLENBQVUsR0FBRyxJQUFiLENBQVA7QUFDSDs7QUFKTSxDQUFYLEMsQ0FPQTs7QUFDQSxJQUFJLEtBQUssR0FBRyxFQUFaO0FBRUEsTUFBTSxTQUFTLEdBQUc7QUFDZCxFQUFBLE1BRGM7QUFFZCxFQUFBLE1BRmM7QUFHZCxFQUFBLElBSGM7QUFJZCxFQUFBO0FBSmMsQ0FBbEI7QUFPQSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsS0FBa0MsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBckQ7QUFFQSxNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIOiuoeeul3V0ZjjnvJbnoIHnmoTlrZfnrKbkuLLplb/luqZcbiAqXG4gKiBAZXhwb3J0c1xuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyDopoHorqHnrpfnmoTlrZfnrKbkuLJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IOmVv+W6plxuICovXG5mdW5jdGlvbiBsZW5ndGgoc3RyaW5nKSB7XG4gICAgbGV0IGxlbiA9IDA7XG4gICAgbGV0IGMgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGMgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAxMjgpXG4gICAgICAgICAgICBsZW4gKz0gMTtcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpXG4gICAgICAgICAgICBsZW4gKz0gMjtcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweEZDMDApID09PSAweEQ4MDAgJiYgKHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4RkMwMCkgPT09IDB4REMwMCkge1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgbGVuICs9IDQ7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgbGVuICs9IDM7XG4gICAgfVxuICAgIHJldHVybiBsZW47XG59XG5cbi8qKlxuICogUmVhZHMgVVRGOCBieXRlcyBhcyBhIHN0cmluZy5cbiAqIEBleHBvcnRzXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBTb3VyY2UgYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU291cmNlIHN0YXJ0XG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFNvdXJjZSBlbmRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFN0cmluZyByZWFkXG4gKi9cbmZ1bmN0aW9uIHJlYWQoYnVmZmVyLCBzdGFydCwgZW5kKSB7XG4gICAgbGV0IF9zdGFydCA9IHN0YXJ0O1xuICAgIGNvbnN0IGxlbiA9IGVuZCAtIF9zdGFydDtcbiAgICBpZiAobGVuIDwgMSlcbiAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgbGV0IHBhcnRzID0gbnVsbDtcbiAgICBjb25zdCBjaHVuayA9IFtdO1xuICAgIGxldCBpID0gMDsgLy8gY2hhciBvZmZzZXRcbiAgICBsZXQgdCA9IG51bGw7IC8vIHRlbXBvcmFyeVxuXG4gICAgd2hpbGUgKF9zdGFydCA8IGVuZCkge1xuICAgICAgICB0ID0gYnVmZmVyW19zdGFydCsrXTtcbiAgICAgICAgaWYgKHQgPCAxMjgpXG4gICAgICAgICAgICBjaHVua1tpKytdID0gdDtcbiAgICAgICAgZWxzZSBpZiAodCA+IDE5MSAmJiB0IDwgMjI0KVxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9ICh0ICYgMzEpIDw8IDYgfCBidWZmZXJbX3N0YXJ0KytdICYgNjM7XG4gICAgICAgIGVsc2UgaWYgKHQgPiAyMzkgJiYgdCA8IDM2NSkge1xuICAgICAgICAgICAgdCA9ICgodCAmIDcpIDw8IDE4IHwgKGJ1ZmZlcltfc3RhcnQrK10gJiA2MykgPDwgMTIgfCAoYnVmZmVyW19zdGFydCsrXSAmIDYzKSA8PCA2IHwgYnVmZmVyW19zdGFydCsrXSAmIDYzKSAtIDB4MTAwMDA7XG4gICAgICAgICAgICBjaHVua1tpKytdID0gMHhEODAwICsgKHQgPj4gMTApO1xuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IDB4REMwMCArICh0ICYgMTAyMyk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9ICh0ICYgMTUpIDw8IDEyIHwgKGJ1ZmZlcltfc3RhcnQrK10gJiA2MykgPDwgNiB8IGJ1ZmZlcltfc3RhcnQrK10gJiA2MztcbiAgICAgICAgaWYgKGkgPiA4MTkxKSB7XG4gICAgICAgICAgICAocGFydHMgfHwgKHBhcnRzID0gW10pKS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuaykpO1xuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFydHMpIHtcbiAgICAgICAgaWYgKGkpXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuay5zbGljZSgwLCBpKSkpO1xuICAgICAgICByZXR1cm4gcGFydHMuam9pbignJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuay5zbGljZSgwLCBpKSk7XG59XG5cbi8qKlxuICogV3JpdGVzIGEgc3RyaW5nIGFzIFVURjggYnl0ZXMuXG4gKiBAZXhwb3J0c1xuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBTb3VyY2Ugc3RyaW5nXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciBEZXN0aW5hdGlvbiBidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgRGVzdGluYXRpb24gb2Zmc2V0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBCeXRlcyB3cml0dGVuXG4gKi9cbmZ1bmN0aW9uIHdyaXRlKHN0cmluZywgYnVmZmVyLCBvZmZzZXQpIHtcbiAgICBsZXQgX29mZnNldCA9IG9mZnNldDtcbiAgICBjb25zdCBzdGFydCA9IF9vZmZzZXQ7XG4gICAgbGV0IGMxID0gbnVsbDsgLy8gY2hhcmFjdGVyIDFcbiAgICBsZXQgYzIgPSBudWxsOyAvLyBjaGFyYWN0ZXIgMlxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYzEgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxO1xuICAgICAgICB9IGVsc2UgaWYgKGMxIDwgMjA0OCkge1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSA+PiA2IHwgMTkyO1xuICAgICAgICAgICAgYnVmZmVyW19vZmZzZXQrK10gPSBjMSAmIDYzIHwgMTI4O1xuICAgICAgICB9IGVsc2UgaWYgKChjMSAmIDB4RkMwMCkgPT09IDB4RDgwMCAmJiAoKGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpKSAmIDB4RkMwMCkgPT09IDB4REMwMCkge1xuICAgICAgICAgICAgYzEgPSAweDEwMDAwICsgKChjMSAmIDB4MDNGRikgPDwgMTApICsgKGMyICYgMHgwM0ZGKTtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gMTggfCAyNDA7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDEyICYgNjMgfCAxMjg7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDYgJiA2MyB8IDEyODtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgJiA2MyB8IDEyODtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgPj4gMTIgfCAyMjQ7XG4gICAgICAgICAgICBidWZmZXJbX29mZnNldCsrXSA9IGMxID4+IDYgJiA2MyB8IDEyODtcbiAgICAgICAgICAgIGJ1ZmZlcltfb2Zmc2V0KytdID0gYzEgJiA2MyB8IDEyODtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX29mZnNldCAtIHN0YXJ0O1xufVxuXG4vLyAyICoqIDMyIC0gMVxuY29uc3QgTUFYX1VJTlQzMiA9IDQyOTQ5NjcyOTU7XG5cbi8qKlxuICogYnVmZmVy6K+75Y+W6LaK55WM6ZSZ6K+vXG4gKlxuICogQHBhcmFtIHtSZWFkZXJ9IHJlYWRlciBSZWFkZXLlrp7kvotcbiAqIEBwYXJhbSB7bnVtYmVyfSB3cml0ZWxlbmd0aCDplb/luqZcbiAqIEByZXR1cm5zIHtSYW5nZUVycm9yfSDlhbfkvZPplJnor69cbiAqL1xuZnVuY3Rpb24gaW5kZXhPdXRPZlJhbmdlKHJlYWRlciwgd3JpdGVsZW5ndGgpIHtcbiAgICByZXR1cm4gUmFuZ2VFcnJvcihgcHJvdG9idWYgcmVhZGVyIGluZGV4IG91dCBvZiByYW5nZTogJHtyZWFkZXIucG9zfSArICR7d3JpdGVsZW5ndGggfHwgMX0gPiAke3JlYWRlci5sZW59YCk7XG59XG5cbi8qKlxuICog6Kej56CB57G7XG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIFJlYWRlclxuICovXG5jbGFzcyBSZWFkZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVhZGVyLlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIOWOn+Wni2J1ZmZlclxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihidWZmZXIpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgIHRoaXMucG9zID0gMDtcbiAgICAgICAgdGhpcy5sZW4gPSBidWZmZXIubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7ulJlYWRlcuWunuS+i1xuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIOWOn+Wni2J1ZmZlclxuICAgICAqIEByZXR1cm5zIHtSZWFkZXJ9IFJlYWRlcuWunuS+i1xuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gbmV3IFJlYWRlcihidWZmZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qnVpbnQzMlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn0g6K+75Y+W57uT5p6cXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHVpbnQzMigpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gTUFYX1VJTlQzMjtcblxuICAgICAgICB2YWx1ZSA9ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxMjcpID4+PiAwOyBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA8PCA3KSA+Pj4gMDsgaWYgKHRoaXMuYnVmZmVyW3RoaXMucG9zKytdIDwgMTI4KSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIHwgKHRoaXMuYnVmZmVyW3RoaXMucG9zXSAmIDEyNykgPDwgMTQpID4+PiAwOyBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAodmFsdWUgfCAodGhpcy5idWZmZXJbdGhpcy5wb3NdICYgMTI3KSA8PCAyMSkgPj4+IDA7IGlmICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSA8IDEyOCkgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSB8ICh0aGlzLmJ1ZmZlclt0aGlzLnBvc10gJiAxNSkgPDwgMjgpID4+PiAwOyBpZiAodGhpcy5idWZmZXJbdGhpcy5wb3MrK10gPCAxMjgpIHJldHVybiB2YWx1ZTtcblxuICAgICAgICB0aGlzLnBvcyArPSA1O1xuICAgICAgICBpZiAodGhpcy5wb3MgPiB0aGlzLmxlbikge1xuICAgICAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmxlbjtcbiAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCAxMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS7juW9k+WJjeS9jee9ruivu+S4gOS4qmludDMyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDor7vlj5bnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgaW50MzIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpbnQzMigpIHwgMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDkuKpzdWludDMyXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSDor7vlj5bnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgc2ludDMyKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudWludDMyKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+Pj4gMSBeIC0odmFsdWUgJiAxKSB8IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5LuO5b2T5YmN5L2N572u6K+75LiA5LiqYm9vbFxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IOi1jOawlOe7k+aenFxuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBib29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51aW50MzIoKSAhPT0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDku47lvZPliY3kvY3nva7or7vkuIDmrrVidWZmZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fSDor7vlj5bnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgUmVhZGVyXG4gICAgICovXG4gICAgYnl0ZXMoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMudWludDMyKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5wb3M7XG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMucG9zICsgbGVuO1xuXG4gICAgICAgIGlmIChlbmQgPiB0aGlzLmxlbilcbiAgICAgICAgICAgIHRocm93IGluZGV4T3V0T2ZSYW5nZSh0aGlzLCBsZW4pO1xuXG4gICAgICAgIHRoaXMucG9zID0gZW5kO1xuXG4gICAgICAgIC8vIOeUqHN1YmFycmF56ICM5LiN5pivc2xpY2XvvIzpmLLmraLljp/mlbDnu4TooqvmhI/lpJbkv67mlLlcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLnN1YmFycmF5KHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIHN0cmluZygpIHtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSB0aGlzLmJ5dGVzKCk7XG4gICAgICAgIHJldHVybiByZWFkKGJ5dGVzLCAwLCBieXRlcy5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi3s+i/h+S4gOautemVv+W6plxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDot7Pov4fnmoTlrZfoioLmlbBcbiAgICAgKiBAcmV0dXJucyB7UmVhZGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFJlYWRlclxuICAgICAqL1xuICAgIHNraXAobGVuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGVuID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9zICsgbGVuID4gdGhpcy5sZW4pXG4gICAgICAgICAgICAgICAgdGhyb3cgaW5kZXhPdXRPZlJhbmdlKHRoaXMsIGxlbik7XG4gICAgICAgICAgICB0aGlzLnBvcyArPSBsZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zID49IHRoaXMubGVuKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBpbmRleE91dE9mUmFuZ2UodGhpcyk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmJ1ZmZlclt0aGlzLnBvcysrXSAmIDEyOCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Lez6L+H5LiA56eN57G75Z6LXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lyZVR5cGUg6Lez6L+H55qE57G75Z6LXG4gICAgICogQHJldHVybnMge1JlYWRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBSZWFkZXJcbiAgICAgKi9cbiAgICBza2lwVHlwZSh3aXJlVHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHdpcmVUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5za2lwKDgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCh0aGlzLnVpbnQzMigpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgIGxldCBfd2lyZVR5cGUgPSB0aGlzLnVpbnQzMigpICYgNztcbiAgICAgICAgICAgICAgICB3aGlsZSAoX3dpcmVUeXBlICE9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tpcFR5cGUoX3dpcmVUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgX3dpcmVUeXBlID0gdGhpcy51aW50MzIoKSAmIDc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCg0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgaW52YWxpZCB3aXJlIHR5cGUgJHt3aXJlVHlwZX0gYXQgb2Zmc2V0ICR7dGhpcy5wb3N9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG4vKipcbiAqIOepuuWHveaVsFxuICpcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gICAgLy8gZW1wdHlcbn1cblxuLyoqXG4gKiDlhpnkuIDkuKpieXRl5YiwYnVmZmVyXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOimgeWGmeWFpeeahOWAvFxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIg6KKr5YaZ5YWl55qEYnVmZmVyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zIOWGmeWFpeS9jee9rlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gd3JpdGVCeXRlKHZhbHVlLCBidWZmZXIsIHBvcykge1xuICAgIGJ1ZmZlcltwb3NdID0gdmFsdWUgJiAyNTU7XG59XG5cbi8qKlxuICog5YaZ5LiA5q61YnVmZmVy5YiwYnVmZmVyXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fSB2YWx1ZSDopoHlhpnlhaXnmoTlrZBidWZmZXJcbiAqIEBwYXJhbSB7VWludDhBcnJheX0gYnVmZmVyIOiiq+WGmeWFpeeahGJ1ZmZlclxuICogQHBhcmFtIHtudW1iZXJ9IHBvcyDlhpnlhaXkvY3nva5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKi9cbmZ1bmN0aW9uIHdyaXRlQnl0ZXModmFsdWUsIGJ1ZmZlciwgcG9zKSB7XG4gICAgYnVmZmVyLnNldCh2YWx1ZSwgcG9zKTtcbn1cblxuLyoqXG4gKiDlhpnlhaXkuIDkuKrlj5jplb/nmoTotJ/mlbDliLBidWZmZXJcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg6KaB5YaZ5YWl55qE5YC8XG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGJ1ZmZlciDooqvlhpnlhaXnmoRidWZmZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3Mg5YaZ5YWl5L2N572uXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiB3cml0ZVZhcmludDY0KHZhbHVlLCBidWZmZXIsIHBvcykge1xuICAgIGxldCBfcG9zID0gcG9zO1xuXG4gICAgd2hpbGUgKHZhbHVlLmhpKSB7XG4gICAgICAgIGJ1ZmZlcltfcG9zKytdID0gdmFsdWUubG8gJiAxMjcgfCAxMjg7XG4gICAgICAgIHZhbHVlLmxvID0gKHZhbHVlLmxvID4+PiA3IHwgdmFsdWUuaGkgPDwgMjUpID4+PiAwO1xuICAgICAgICB2YWx1ZS5oaSA+Pj49IDc7XG4gICAgfVxuICAgIHdoaWxlICh2YWx1ZS5sbyA+IDEyNykge1xuICAgICAgICBidWZmZXJbX3BvcysrXSA9IHZhbHVlLmxvICYgMTI3IHwgMTI4O1xuICAgICAgICB2YWx1ZS5sbyA9IHZhbHVlLmxvID4+PiA3O1xuICAgIH1cbiAgICBidWZmZXJbX3BvcysrXSA9IHZhbHVlLmxvO1xufVxuXG4vKipcbiAqIOaooeaLnzY05L2N5pWw5a2X77yM5aSE55CG6LaF6L+HdWludDMy55qE5oOF5Ya1XG4gKlxuICogQGNsYXNzIExvbmdCaXRzXG4gKi9cbmNsYXNzIExvbmdCaXRzIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExvbmdCaXRzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsbyDkvY4zMuS9jeWAvFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaSDpq5gzMuS9jeWAvFxuICAgICAqIEBtZW1iZXJvZiBMb25nQml0c1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxvLCBoaSkge1xuICAgICAgICB0aGlzLmxvID0gbG8gPj4+IDA7XG4gICAgICAgIHRoaXMuaGkgPSBoaSA+Pj4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmoLnmja52YWx1ZeWIm+W7uuS4gOS4qkxvbmdCaXRzXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOimgei9rOaNoueahOWAvFxuICAgICAqIEByZXR1cm5zIHtMb25nQml0c30gTG9uZ0JpdHPlrp7kvotcbiAgICAgKiBAbWVtYmVyb2YgTG9uZ0JpdHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU51bWJlcih2YWx1ZSkge1xuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHNpZ24gPSBfdmFsdWUgPCAwO1xuXG4gICAgICAgIGlmIChzaWduKVxuICAgICAgICAgICAgX3ZhbHVlID0gLV92YWx1ZTtcblxuICAgICAgICBsZXQgbG8gPSBfdmFsdWUgPj4+IDA7XG4gICAgICAgIGxldCBoaSA9IChfdmFsdWUgLSBsbykgLyA0Mjk0OTY3Mjk2ID4+PiAwO1xuXG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgICBoaSA9IH5oaSA+Pj4gMDtcbiAgICAgICAgICAgIGxvID0gfmxvID4+PiAwO1xuICAgICAgICAgICAgaWYgKCsrbG8gPiA0Mjk0OTY3Mjk1KSB7XG4gICAgICAgICAgICAgICAgbG8gPSAwO1xuICAgICAgICAgICAgICAgIGlmICgrK2hpID4gNDI5NDk2NzI5NSlcbiAgICAgICAgICAgICAgICAgICAgaGkgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBMb25nQml0cyhsbywgaGkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiDlhpnlhaXlgLzliLBidWZmZXLnmoTmk43kvZxcbiAqXG4gKiBAY2xhc3MgT3BcbiAqL1xuY2xhc3MgT3Age1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgT3AuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4g5YW35L2T55qE5pON5L2c5Ye95pWwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbiDplb/luqZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUg5YW35L2T55qE5YC8XG4gICAgICogQG1lbWJlcm9mIE9wXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZm4sIGxlbiwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5mbiA9IGZuO1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHQgPSBudWxsO1xuICAgIH1cbn1cblxuLyoqXG4gKiDlhpnlhaXkuIDkuKrlj5jplb/nvJbnoIHlgLznmoTmk43kvZxcbiAqXG4gKiBAY2xhc3MgVmFyaW50T3BcbiAqIEBleHRlbmRzIHtPcH1cbiAqL1xuY2xhc3MgVmFyaW50T3AgZXh0ZW5kcyBPcCB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBWYXJpbnRPcC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuIOmVv+W6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlhbfkvZPnmoTlgLxcbiAgICAgKiBAbWVtYmVyb2YgVmFyaW50T3BcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihsZW4sIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmZuID0gZnVuY3Rpb24gd3JpdGVWYXJpbnQzMih2YWx1ZSwgYnVmZmVyLCBwb3MpIHtcbiAgICAgICAgICAgIGxldCBfdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGxldCBfcG9zID0gcG9zO1xuXG4gICAgICAgICAgICB3aGlsZSAoX3ZhbHVlID4gMTI3KSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyW19wb3MrK10gPSBfdmFsdWUgJiAxMjcgfCAxMjg7XG4gICAgICAgICAgICAgICAgX3ZhbHVlID4+Pj0gNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1ZmZlcltfcG9zXSA9IF92YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICog54q25oCBXG4gKlxuICogQGNsYXNzIFN0YXRlXG4gKi9cbmNsYXNzIFN0YXRlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFN0YXRlLlxuICAgICAqIEBwYXJhbSB7V3JpdGVyfSB3cml0ZXIgV3JpdGVy5a6e5L6LXG4gICAgICogQG1lbWJlcm9mIFN0YXRlXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iod3JpdGVyKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHdyaXRlci5oZWFkO1xuICAgICAgICB0aGlzLnRhaWwgPSB3cml0ZXIudGFpbDtcbiAgICAgICAgdGhpcy5sZW4gPSB3cml0ZXIubGVuO1xuICAgICAgICB0aGlzLm5leHQgPSB3cml0ZXIuc3RhdGVzO1xuICAgIH1cbn1cblxuLyoqXG4gKiDnvJbnoIHnsbtcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgV3JpdGVyXG4gKi9cbmNsYXNzIFdyaXRlciB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBXcml0ZXIuXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxlbiA9IDA7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBPcChub29wLCAwLCAwKTtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLnN0YXRlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu6V3JpdGVy5a6e5L6LXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gV3JpdGVy5a6e5L6LXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgV3JpdGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6ZO+6KGoXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiDmk43kvZzlh73mlbBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVuIOmVv+W6plxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIF9wdXNoKGZuLCBsZW4sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5uZXh0ID0gbmV3IE9wKGZuLCBsZW4sIHZhbHVlKTtcbiAgICAgICAgdGhpcy5sZW4gKz0gbGVuO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKp1aW50MzLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIHVpbnQzMih2YWx1ZSkge1xuICAgICAgICBsZXQgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIF92YWx1ZSA9IF92YWx1ZSA+Pj4gMDtcblxuICAgICAgICBjb25zdCBvcCA9IG5ldyBWYXJpbnRPcChcbiAgICAgICAgICAgIF92YWx1ZSA8IDEyOCA/IDFcbiAgICAgICAgICAgICAgICA6IF92YWx1ZSA8IDE2Mzg0ID8gMlxuICAgICAgICAgICAgICAgICAgICA6IF92YWx1ZSA8IDIwOTcxNTIgPyAzXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92YWx1ZSA8IDI2ODQzNTQ1NiA/IDRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDUsXG4gICAgICAgICAgICBfdmFsdWUpO1xuXG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5uZXh0ID0gb3A7XG4gICAgICAgIHRoaXMubGVuICs9IG9wLmxlbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDkuKppbnQzMuWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgaW50MzIodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgMFxuICAgICAgICAgICAgPyB0aGlzLl9wdXNoKHdyaXRlVmFyaW50NjQsIDEwLCBMb25nQml0cy5mcm9tTnVtYmVyKHZhbHVlKSkgLy8gMTAgYnl0ZXMgcGVyIHNwZWNcbiAgICAgICAgICAgIDogdGhpcy51aW50MzIodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeS4gOS4qnNpbnQzMuWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgc2ludDMyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpbnQzMigodmFsdWUgPDwgMSBeIHZhbHVlID4+IDMxKSA+Pj4gMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YaZ5LiA5LiqYm9vbOWIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSDlgLxcbiAgICAgKiBAcmV0dXJucyB7V3JpdGVyfSB0aGlzXG4gICAgICogQG1lbWJlcm9mIFdyaXRlclxuICAgICAqL1xuICAgIGJvb2wodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1c2god3JpdGVCeXRlLCAxLCB2YWx1ZSA/IDEgOiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnkuIDmrrXlrZBidWZmZXLliLDlvZPliY3kvY3nva5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gdmFsdWUg5YC8XG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBieXRlcyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBsZW4gPSB2YWx1ZS5sZW4gPj4+IDA7XG5cbiAgICAgICAgaWYgKCFsZW4pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVpbnQzMihsZW4pLl9wdXNoKHdyaXRlQnl0ZXMsIGxlbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWGmeS4gOS4snN0cmluZ+WIsOW9k+WJjeS9jee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIOWAvFxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgc3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IGxlbmd0aCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgICAgICAgID8gdGhpcy51aW50MzIobGVuKS5fcHVzaCh3cml0ZSwgbGVuLCB2YWx1ZSlcbiAgICAgICAgICAgIDogdGhpcy5fcHVzaCh3cml0ZUJ5dGUsIDEsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGZvcmtcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtXcml0ZXJ9IHRoaXNcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgZm9yaygpIHtcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSBuZXcgU3RhdGUodGhpcyk7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG5ldyBPcChub29wLCAwLCAwKTtcbiAgICAgICAgdGhpcy5sZW4gPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXNldFxuICAgICAqXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVzKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLnN0YXRlcy5oZWFkO1xuICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy5zdGF0ZXMudGFpbDtcbiAgICAgICAgICAgIHRoaXMubGVuID0gdGhpcy5zdGF0ZXMubGVuO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnN0YXRlcy5uZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbmV3IE9wKG5vb3AsIDAsIDApO1xuICAgICAgICAgICAgdGhpcy5sZW4gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGxkZWxpbVxuICAgICAqXG4gICAgICogQHJldHVybnMge1dyaXRlcn0gdGhpc1xuICAgICAqIEBtZW1iZXJvZiBXcml0ZXJcbiAgICAgKi9cbiAgICBsZGVsaW0oKSB7XG4gICAgICAgIGNvbnN0IHsgaGVhZCwgdGFpbCwgbGVuIH0gPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKS51aW50MzIobGVuKTtcbiAgICAgICAgaWYgKGxlbikge1xuICAgICAgICAgICAgdGhpcy50YWlsLm5leHQgPSBoZWFkLm5leHQ7IC8vIHNraXAgbm9vcFxuICAgICAgICAgICAgdGhpcy50YWlsID0gdGFpbDtcbiAgICAgICAgICAgIHRoaXMubGVuICs9IGxlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlhpnlhaXnu5PmnZ/vvIzlvIDlp4vnvJbnoIFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtVaW50OEFycmF5fSDnvJbnoIHnu5PmnpxcbiAgICAgKiBAbWVtYmVyb2YgV3JpdGVyXG4gICAgICovXG4gICAgZmluaXNoKCkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbik7XG4gICAgICAgIGxldCBoZWFkID0gdGhpcy5oZWFkLm5leHQ7IC8vIHNraXAgbm9vcFxuICAgICAgICBsZXQgcG9zID0gMDtcblxuICAgICAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgICAgICAgaGVhZC5mbihoZWFkLnZhbHVlLCBidWZmZXIsIHBvcyk7XG4gICAgICAgICAgICBwb3MgKz0gaGVhZC5sZW47XG4gICAgICAgICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG59XG5cbi8vICRwcm90b2J1Zi4kdXRpbCBwb2x5ZmlsbFxuXG52YXIgdXRpbCA9IHtcbiAgICBlbXB0eUFycmF5OiBbXSxcbiAgICBQcm90b2NvbEVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvciguLi5hcmdzKTtcbiAgICB9XG59O1xuXG4vLyAkcHJvdG9idWYucm9vdHMgcG9seWZpbGxcbnZhciByb290cyA9IHt9O1xuXG5jb25zdCAkcHJvdG9idWYgPSB7XG4gICAgUmVhZGVyLFxuICAgIFdyaXRlcixcbiAgICB1dGlsLFxuICAgIHJvb3RzXG59O1xuXG50eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93LiRwcm90b2J1ZiA9ICRwcm90b2J1Zik7XG5cbm1vZHVsZS5leHBvcnRzID0gJHByb3RvYnVmO1xuIl19
