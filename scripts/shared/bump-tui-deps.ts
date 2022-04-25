export interface TuiBumpDepsOptions {
    version: string;
    deps: Record<string, string>;
    isPeerDependency?: boolean;
}

export function bumpTuiDeps({deps, version, isPeerDependency}: TuiBumpDepsOptions): void {
    const prefix = isPeerDependency ? '>=' : '^';

    Object.keys(deps)
        .filter(key => !key.indexOf('@taiga-ui/'))
        .forEach(key => {
            deps[key] = `${prefix}${version}`;
        });
}
