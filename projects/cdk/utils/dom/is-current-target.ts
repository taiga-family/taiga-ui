/**
 * @deprecated: use {@link tuiIsCurrentTarget} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isCurrentTarget({target, currentTarget}: Event): boolean {
    return target === currentTarget;
}

export const tuiIsCurrentTarget = isCurrentTarget;
