import {tuiIsObject} from '../../projects/cdk/utils/miscellaneous/is-object';
import {tuiIsString} from '../../projects/cdk/utils/miscellaneous/is-string';
import {bumpTuiDeps} from './bump-tui-deps';
import {bumpTuiVersionInPackageJson} from './bump-tui-version-in-package-json';
import {isTuiPackageName} from './is-tui-package-name';

interface UpdatePackageJsonOptions {
    packageJson: Record<string, Record<string, any> | string>;
    prevVersion: string;
    newVersion: string;
    isPackageLockFile: boolean;
    ignores: string[];
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
        const pkg = Object.values(packages) as Array<Record<string, any>>;

        for (const packageLockJson of pkg) {
            if (!isTuiPackageName(packageLockJson?.name as string | undefined, ignores)) {
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
