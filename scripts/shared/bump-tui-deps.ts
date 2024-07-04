import {tuiIsString} from '../../projects/cdk/utils/miscellaneous/is-string';
import {isTuiPackageName} from './is-tui-package-name';

export interface TuiBumpDepsOptions {
    deps: Record<string, Record<string, unknown> | string>;
    ignores: readonly string[];
    isPeerDependency?: boolean;
    newVersion: string;
    prevVersion: string;
}

export function bumpTuiDeps({
    deps,
    prevVersion,
    newVersion,
    isPeerDependency,
    ignores,
}: TuiBumpDepsOptions): void {
    Object.keys(deps)
        .filter((key) => isTuiPackageName(key, ignores))
        .forEach((key) => {
            if (tuiIsString(deps[key])) {
                deps[key] = isPeerDependency
                    ? (deps[key] as string)?.replace(prevVersion, newVersion)
                    : `^${newVersion}`;
            } else if (deps[key]?.hasOwnProperty('requires')) {
                bumpTuiDeps({
                    deps: (deps[key] as Record<string, Record<string, string>>).requires,
                    isPeerDependency,
                    ignores,
                    prevVersion,
                    newVersion,
                });
            }
        });
}
