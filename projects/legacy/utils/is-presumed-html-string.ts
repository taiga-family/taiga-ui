// TODO: Move to legacy with tui-svg
export function tuiIsPresumedHTMLString(candidate: string): boolean {
    const trimmed = candidate.trim();

    return trimmed.startsWith('<') && trimmed.endsWith('>');
}
