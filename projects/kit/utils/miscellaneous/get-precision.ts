/**
 * @deprecated: use {@link tuiGetPrecision} instead
 * @return fractional length
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getPrecision(num: number): number {
    const [, fractionPart = ''] = String(num).split('.');

    return fractionPart.length;
}

export const tuiGetPrecision = getPrecision;
