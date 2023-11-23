export function isTuiPackageName(name: string = ``, ignores: readonly string[]): boolean {
    return (
        (name?.startsWith(`@taiga-ui/`) || name === `taiga-ui`) && !ignores.includes(name)
    );
}
