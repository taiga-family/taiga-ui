export function isTuiPackageName(name: string = '', ignores: string[]): boolean {
    return name?.startsWith('@taiga-ui/') && !ignores.includes(name);
}
