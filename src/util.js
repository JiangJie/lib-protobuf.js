// $protobuf.$util polyfill

export default {
    emptyArray: [],
    ProtocolError(...args) {
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
};