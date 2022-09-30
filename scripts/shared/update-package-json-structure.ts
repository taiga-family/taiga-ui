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

    if (typeof name === `string` && isTuiPackageName(name, ignores)) {
        bumpTuiVersionInPackageJson(packageJson, newVersion);
    }

    if (typeof dependencies === `object`) {
        bumpTuiDeps({deps: dependencies, prevVersion, newVersion, ignores});
    }

    if (typeof peerDependencies === `object`) {
        bumpTuiDeps({
            deps: peerDependencies,
            prevVersion,
            newVersion,
            isPeerDependency: true,
            ignores,
        });
    }

    if (typeof devDependencies === `object`) {
        bumpTuiDeps({deps: devDependencies, prevVersion, newVersion, ignores});
    }

    if (isPackageLockFile && typeof packages === `object`) {
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
