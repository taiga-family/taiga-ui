import {bumpTuiDeps} from './bump-tui-deps';
import {bumpVersionInPackageJson} from './bump-version-in-package-json';
import {isTaigaUiPackageName} from './is-taiga-ui-package-name';

export function updatePackageJsonStructure(
    packageJson: Record<string, Record<string, any> | string>,
    version: string,
    isPackageLockFile: boolean,
    ignores: string[] = [],
): void {
    const {dependencies, peerDependencies, devDependencies, packages} = packageJson;

    bumpVersionInPackageJson(packageJson, version);

    if (typeof dependencies == 'object') {
        bumpTuiDeps({deps: dependencies, version, ignores});
    }

    if (typeof peerDependencies == 'object') {
        bumpTuiDeps({
            deps: peerDependencies,
            version,
            isPeerDependency: true,
            ignores,
        });
    }

    if (typeof devDependencies == 'object') {
        bumpTuiDeps({deps: devDependencies, version, ignores});
    }

    /**
     * @note:
     * need to recursively update dependencies
     * in packageLock file type of version 2
     */
    if (isPackageLockFile && typeof packages == 'object') {
        for (const packageLockJson of Object.values(packages)) {
            if (isTaigaUiPackageName(packageLockJson?.name, ignores)) {
                updatePackageJsonStructure(packageLockJson, version, true, ignores);
            }
        }
    }
}
