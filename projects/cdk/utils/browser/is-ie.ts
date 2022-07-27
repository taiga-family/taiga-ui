/**
 * @deprecated: use {@link tuiIsIE} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isIE(userAgent: string): boolean {
    return userAgent.toLowerCase().includes(`trident`);
}

export const tuiIsIE = isIE;
