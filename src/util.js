// $protobuf.$util polyfill

export default {
    emptyArray: [],
    ProtocolError(...args) {
        return new Error(...args);
    }
};