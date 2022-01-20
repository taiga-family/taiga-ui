/**
 * @return fractional length
 */
export function getPrecision(num: number): number {
    const [, fractionPart = ''] = num.toString().split('.');

    return fractionPart.length;
}
