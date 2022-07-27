import {bumpTuiDeps} from './bump-tui-deps';
import {bumpTuiVersionInPackageJson} from './bump-tui-version-in-package-json';
import {isTuiPackageName} from './is-tui-package-name';

export function updatePackageJsonStructure(
    packageJson: Record<string, Record<string, any> | string>,
    version: string,
    isPackageLockFile: boolean,
    ignores: string[] = [],
): void {
    const {name, dependencies, peerDependencies, devDependencies, packages} = packageJson;

    if (typeof name === `string` && isTuiPackageName(name, ignores)) {
        bumpTuiVersionInPackageJson(packageJson, version);
    }

    if (typeof dependencies === `object`) {
        bumpTuiDeps({deps: dependencies, version, ignores});
    }

    if (typeof peerDependencies === `object`) {
        bumpTuiDeps({
            deps: peerDependencies,
            version,
            isPeerDependency: true,
            ignores,
        });
    }

    if (typeof devDependencies === `object`) {
        bumpTuiDeps({deps: devDependencies, version, ignores});
    }

    if (isPackageLockFile && typeof packages === `object`) {
        for (const packageLockJson of Object.values(packages)) {
            if (!isTuiPackageName(packageLockJson?.name, ignores)) {
                continue;
            }

            updatePackageJsonStructure(packageLockJson, version, true, ignores);
        }
    }
}
