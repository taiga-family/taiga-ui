import {EOL} from 'node:os';

import type {Tree} from '@angular-devkit/schematics';
import {getActiveProject, saveActiveProject} from 'ng-morph';

import {ALL_FILES} from '../../../constants/file-globs';
import {getFileSystem} from '../../utils/get-file-system';

export function replaceTemplateLineEndings(tree: Tree): void {
    const fileSystem = getFileSystem(tree);

    getActiveProject()
        ?.getSourceFiles(ALL_FILES as readonly string[])
        .forEach((file) =>
            file.replaceWithText(file.getFullText().replaceAll(/\r?\n/g, EOL)),
        );

    fileSystem.commitEdits();
    saveActiveProject();
}
