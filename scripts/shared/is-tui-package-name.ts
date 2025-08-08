export function isTuiPackageName(name?: string, ignore: readonly string[] = []): boolean {
    return (
        (name?.startsWith('@taiga-ui/') || name === 'taiga-ui') && !ignore.includes(name)
    );
}
