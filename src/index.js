import Reader from './reader';
import Writer from './writer';

const $protobuf = {
    Reader,
    Writer
};

typeof window !== 'undefined' && (window.$protobuf = $protobuf);
export default $protobuf;