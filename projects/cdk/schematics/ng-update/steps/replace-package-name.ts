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
    const fileSystem = getFileSystem(tree);

    replaceText([{from: oldPackage, to: newPackage.name}], ALL_TS_FILES);

    if (getPackageJsonDependency(tree, oldPackage)) {
        removePackageJsonDependency(tree, oldPackage);
        addPackageJsonDependency(tree, newPackage);
    }

    fileSystem.commitEdits();
    saveActiveProject();
}
