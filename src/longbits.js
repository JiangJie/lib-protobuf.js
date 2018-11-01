/**
 * 模拟64位数字，处理超过uint32的情况
 *
 * @class LongBits
 */
export default class LongBits {
    /**
     * Creates an instance of LongBits.
     * @param {number} lo 低32位值
     * @param {number} hi 高32位值
     * @memberof LongBits
     */
    constructor(lo, hi) {
        this.lo = lo >>> 0;
        this.hi = hi >>> 0;
    }

    /**
     * @description 计算所占字节数
     * @returns {number} 字节数
     * @memberof LongBits
     */
    length() {
        const part0 = this.lo;
        const part1 = (this.lo >>> 28 | this.hi << 4) >>> 0;
        const part2 = this.hi >>> 24;

        return part2 === 0
            ? part1 === 0
                ? part0 < 16384
                    ? part0 < 128 ? 1 : 2
                    : part0 < 2097152 ? 3 : 4
                : part1 < 16384
                    ? part1 < 128 ? 5 : 6
                    : part1 < 2097152 ? 7 : 8
            : part2 < 128 ? 9 : 10;
    }

    /**
     * @description 转化为普通数字
     * @param {boolean} [unsigned=false] unsigned?
     * @returns {number}
     * @memberof LongBits
     */
    toNumber(unsigned = false) {
        if (!unsigned && this.hi >>> 31) {
            const lo = ~this.lo + 1 >>> 0;
            let hi = ~this.hi >>> 0;
            if (!lo)
                hi = hi + 1 >>> 0;
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
    static fromNumber(value) {
        let _value = value;
        const sign = _value < 0;

        if (sign)
            _value = -_value;

        let lo = _value >>> 0;
        let hi = (_value - lo) / 4294967296 >>> 0;

        if (sign) {
            hi = ~hi >>> 0;
            lo = ~lo >>> 0;
            if (++lo > 4294967295) {
                lo = 0;
                if (++hi > 4294967295)
                    hi = 0;
            }
        }

        return new LongBits(lo, hi);
    }
}