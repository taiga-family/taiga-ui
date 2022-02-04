/**
 * @return fractional length
 */
export function getPrecision(num: number): number {
    const [, fractionPart = ''] = String(num).split('.');

    return fractionPart.length;
}
