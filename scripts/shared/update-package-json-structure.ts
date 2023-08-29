import {tuiIsObject} from '../../projects/cdk/utils/miscellaneous/is-object';
import {tuiIsString} from '../../projects/cdk/utils/miscellaneous/is-string';
import {bumpTuiDeps} from './bump-tui-deps';
import {bumpTuiVersionInPackageJson} from './bump-tui-version-in-package-json';
import {isTuiPackageName} from './is-tui-package-name';

interface UpdatePackageJsonOptions {
    ignores: string[];
    isPackageLockFile: boolean;
    newVersion: string;
    packageJson: Record<string, Record<string, any> | string>;
    prevVersion: string;
}

export function updatePackageJsonStructure({
    ignores,
    isPackageLockFile,
    newVersion,
    packageJson,
    prevVersion,
}: UpdatePackageJsonOptions): void {
    const {name, dependencies, devDependencies, packages, peerDependencies} = packageJson;

    if (tuiIsString(name) && isTuiPackageName(name, ignores)) {
        bumpTuiVersionInPackageJson(packageJson, newVersion);
    }

    if (tuiIsObject(dependencies)) {
        bumpTuiDeps({deps: dependencies, ignores, newVersion, prevVersion});
    }

    if (tuiIsObject(peerDependencies)) {
        bumpTuiDeps({
            deps: peerDependencies,
            ignores,
            isPeerDependency: true,
            newVersion,
            prevVersion,
        });
    }

    if (tuiIsObject(devDependencies)) {
        bumpTuiDeps({deps: devDependencies, ignores, newVersion, prevVersion});
    }

    if (isPackageLockFile && tuiIsObject(packages)) {
        for (const packageLockJson of Object.values(packages)) {
            if (!isTuiPackageName(packageLockJson?.name, ignores)) {
                continue;
            }

            updatePackageJsonStructure({
                ignores,
                isPackageLockFile: true,
                newVersion,
                packageJson: packageLockJson,
                prevVersion,
            });
        }
    }
}
