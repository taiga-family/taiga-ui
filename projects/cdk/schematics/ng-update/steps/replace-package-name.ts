import {type Tree} from '@angular-devkit/schematics';
import {
    addPackageJsonDependency,
    getPackageJsonDependency,
    removePackageJsonDependency,
    saveActiveProject,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';
import {getFileSystem} from '../utils/get-file-system';
import {replaceText} from '../utils/replace-text';

export function replacePackageName(
    oldPackage: string,
    newPackage: {name: string; version: string},
    tree: Tree,
): void {
    const fileSystem = getFileSystem(tree);

    replaceText([{from: oldPackage, to: newPackage.name}], ALL_TS_FILES);

    const old = getPackageJsonDependency(tree, oldPackage);

    if (old) {
        removePackageJsonDependency(tree, oldPackage);
        addPackageJsonDependency(tree, {...newPackage, type: old.type});
    }

    fileSystem.commitEdits();
    saveActiveProject();
}

interface Options {
    name: string;
    tree: Tree;
    remove: boolean;
    nameTo?: string;
    versionTo?: string;
}

export function replaceInPackageJson(options: Options): void {
    const {tree, name, remove, nameTo, versionTo} = options;
    const fileSystem = getFileSystem(tree);
    const match = getPackageJsonDependency(tree, name);

    if (match) {
        removePackageJsonDependency(tree, name);

        if (!remove) {
            addPackageJsonDependency(tree, {
                type: match.type,
                name: nameTo ?? name,
                version: versionTo ?? match.version,
            });
        }
    }

    fileSystem.commitEdits();
    saveActiveProject();
}
