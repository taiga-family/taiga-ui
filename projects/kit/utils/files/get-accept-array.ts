/**
 * @deprecated: use {@link tuiGetAcceptArray} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getAcceptArray(accept: string): readonly string[] {
    return accept
        .toLowerCase()
        .split(`,`)
        .map(format => format.trim());
}

export const tuiGetAcceptArray = getAcceptArray;
