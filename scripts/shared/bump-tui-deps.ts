import {isTuiPackageName} from './is-tui-package-name';

export interface TuiBumpDepsOptions {
    prevVersion: string;
    newVersion: string;
    deps: Record<string, Record<string, unknown> | string>;
    isPeerDependency?: boolean;
    ignores: string[];
}

export function bumpTuiDeps({
    deps,
    prevVersion,
    newVersion,
    isPeerDependency,
    ignores,
}: TuiBumpDepsOptions): void {
    const keys = Object.keys(deps).filter(key => isTuiPackageName(key, ignores));

    for (const key of keys) {
        if (typeof deps[key] === `string`) {
            deps[key] = isPeerDependency
                ? (deps[key] as string)?.replace(prevVersion, newVersion)
                : `^${newVersion}`;
        } else if (deps[key]?.hasOwnProperty(`requires`)) {
            bumpTuiDeps({
                deps: (deps[key] as Record<string, Record<string, string>>).requires,
                isPeerDependency,
                ignores,
                prevVersion,
                newVersion,
            });
        }
    }
}
