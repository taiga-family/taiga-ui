import {tuiIsObject} from '../../projects/cdk/utils/miscellaneous/is-object';
import {tuiIsString} from '../../projects/cdk/utils/miscellaneous/is-string';
import {bumpTuiDeps} from './bump-tui-deps';
import {bumpTuiVersionInPackageJson} from './bump-tui-version-in-package-json';
import {isTuiPackageName} from './is-tui-package-name';

interface UpdatePackageJsonOptions {
    ignores: readonly string[];
    isPackageLockFile: boolean;
    newVersion: string;
    packageJson: Record<string, Record<string, Record<string, string>> | string>;
    prevVersion: string;
}

export function updatePackageJsonStructure({
    packageJson,
    isPackageLockFile,
    ignores,
    prevVersion,
    newVersion,
}: UpdatePackageJsonOptions): void {
    const {name, dependencies, peerDependencies, devDependencies, packages} = packageJson;

    if (tuiIsString(name) && isTuiPackageName(name, ignores)) {
        bumpTuiVersionInPackageJson(packageJson, newVersion);
    }

    if (tuiIsObject(dependencies)) {
        bumpTuiDeps({deps: dependencies, prevVersion, newVersion, ignores});
    }

    if (tuiIsObject(peerDependencies)) {
        bumpTuiDeps({
            deps: peerDependencies,
            prevVersion,
            newVersion,
            isPeerDependency: true,
            ignores,
        });
    }

    if (tuiIsObject(devDependencies)) {
        bumpTuiDeps({deps: devDependencies, prevVersion, newVersion, ignores});
    }

    if (isPackageLockFile && tuiIsObject(packages)) {
        for (const packageLockJson of Object.values(packages)) {
            if (!isTuiPackageName(packageLockJson?.name, ignores)) {
                continue;
            }

            updatePackageJsonStructure({
                packageJson: packageLockJson,
                prevVersion,
                newVersion,
                isPackageLockFile: true,
                ignores,
            });
        }
    }
}
