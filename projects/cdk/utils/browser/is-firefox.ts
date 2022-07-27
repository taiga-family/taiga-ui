/**
 * @deprecated: use {@link tuiIsFirefox} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isFirefox(userAgent: string): boolean {
    return userAgent.toLowerCase().includes(`firefox`);
}

export const tuiIsFirefox = isFirefox;
