export function isTuiPackageName(name = '', ignores: readonly string[]): boolean {
    return (
        (name?.startsWith('@taiga-ui/') || name === 'taiga-ui') && !ignores.includes(name)
    );
}
