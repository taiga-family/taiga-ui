/**
 * @deprecated: use {@link tuiToInt} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function toInt(bool: boolean): 1 | 0 {
    return bool ? 1 : 0;
}

export const tuiToInt = toInt;
