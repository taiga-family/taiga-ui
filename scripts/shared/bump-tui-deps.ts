export interface TuiBumpDepsOptions {
    version: string;
    deps: Record<string, string>;
    isPeerDependency?: boolean;
    ignores: string[];
}

export function bumpTuiDeps({
    deps,
    version,
    isPeerDependency,
    ignores,
}: TuiBumpDepsOptions): void {
    const prefix = isPeerDependency ? '>=' : '^';
    const keys = Object.keys(deps)
        .filter(key => key.startsWith('@taiga-ui/'))
        .filter(key => !ignores.includes(key));

    for (const key of keys) {
        deps[key] = `${prefix}${version}`;
    }
}
