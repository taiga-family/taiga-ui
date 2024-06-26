import type {Tree} from '@angular-devkit/schematics';
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
    if (!getPackageJsonDependency(tree, oldPackage)) {
        return;
    }

    const fileSystem = getFileSystem(tree);

    replaceText([{from: oldPackage, to: newPackage.name}], ALL_TS_FILES);
    removePackageJsonDependency(tree, oldPackage);

    addPackageJsonDependency(tree, newPackage);

    fileSystem.commitEdits();
    saveActiveProject();
}
