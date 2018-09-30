/**
 * 计算utf8编码的字符串长度
 *
 * @exports
 * @param {string} string 要计算的字符串
 * @returns {number} 长度
 */
export function length(string) {
    let len = 0;
    let c = 0;
    for (let i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
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
export function read(buffer, start, end) {
    let _start = start;
    const len = end - _start;
    if (len < 1)
        return '';

    let parts = null;
    const chunk = [];
    let i = 0; // char offset
    let t = null; // temporary

    while (_start < end) {
        t = buffer[_start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[_start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[_start++] & 63) << 12 | (buffer[_start++] & 63) << 6 | buffer[_start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[_start++] & 63) << 6 | buffer[_start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }

    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
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
export function write(string, buffer, offset) {
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