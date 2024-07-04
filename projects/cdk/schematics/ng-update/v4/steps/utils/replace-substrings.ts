function replaceSubstring(text: string, replacement: Replacement): string {
    return (
        text.slice(0, replacement.start) +
        replacement.to +
        text.slice(replacement.start + replacement.from.length)
    );
}

export interface Replacement {
    start: number;
    from: string;
    to: string;
}

export function replaceSubstrings(text: string, replacements: Replacement[]): string {
    let transformed = text;
    let acc = 0;

    replacements.forEach((replacement) => {
        replacement.start += acc;
        transformed = replaceSubstring(transformed, replacement);
        acc += replacement.to.length - replacement.from.length;
    });

    return transformed;
}
