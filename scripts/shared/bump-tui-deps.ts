import {isTuiPackageName} from './is-tui-package-name';

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
    const keys = Object.keys(deps).filter(key => isTuiPackageName(key, ignores));

    for (const key of keys) {
        if (typeof deps[key] === 'string') {
            deps[key] = `${prefix}${version}`;
        }
    }
}
