/**
 * @deprecated: use {@link tuiIsNumber} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isNumber(value: unknown): value is number {
    return typeof value === `number`;
}

export const tuiIsNumber = isNumber;
