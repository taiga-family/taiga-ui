export function isTuiPackageName(name: string = '', ignores: string[]): boolean {
    return (
        (name?.startsWith('@taiga-ui/') || name === 'taiga-ui') && !ignores.includes(name)
    );
}
