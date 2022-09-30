/**
 * @return fractional length
 */
export function tuiGetPrecision(num: number): number {
    const [, fractionPart = ``] = String(num).split(`.`);

    return fractionPart.length;
}
