/**
 * @deprecated: use {@link tuiIsPresent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isPresent<T>(value?: T | null): value is T {
    return value !== null && value !== undefined;
}

export const tuiIsPresent = isPresent;
