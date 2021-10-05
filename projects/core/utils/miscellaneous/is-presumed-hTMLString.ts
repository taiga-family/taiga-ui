export function isPresumedHTMLString(candidate: string): boolean {
    const trimmed = candidate.trim();

    return trimmed.startsWith('<') && trimmed.endsWith('>');
}
