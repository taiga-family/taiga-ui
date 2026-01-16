export function tuiToKebab(str: string): string {
    return str
        .replaceAll(' ', '-')
        .replaceAll(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            ($, ofs) => (ofs ? '-' : '') + $.toLowerCase(),
        );
}
