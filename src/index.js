import Reader from './reader';
import Writer from './writer';
import util from './util';
import roots from './roots';

const $protobuf = {
    Reader,
    Writer,
    util,
    roots
};

typeof window !== 'undefined' && (window.$protobuf = $protobuf);
export default $protobuf;