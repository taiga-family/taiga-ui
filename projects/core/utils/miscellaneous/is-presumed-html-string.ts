/**
 * @deprecated: use {@link tuiIsPresumedHTMLString} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isPresumedHTMLString(candidate: string): boolean {
    const trimmed = candidate.trim();

    return trimmed.startsWith('<') && trimmed.endsWith('>');
}

export const tuiIsPresumedHTMLString = isPresumedHTMLString;
