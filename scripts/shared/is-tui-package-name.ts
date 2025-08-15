export function isTuiPackageName(name = '', ignore: readonly string[] = []): boolean {
    return (
        (name.startsWith('@taiga-ui/') || name === 'taiga-ui') && !ignore.includes(name)
    );
}
