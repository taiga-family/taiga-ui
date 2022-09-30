export function tuiIsPresumedHTMLString(candidate: string): boolean {
    const trimmed = candidate.trim();

    return trimmed.startsWith(`<`) && trimmed.endsWith(`>`);
}
