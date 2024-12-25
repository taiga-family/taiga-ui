/// <reference lib="es2021" />
import {EOL} from 'node:os';

import type {FileSystem} from 'ng-morph';
import {getActiveProject, getSourceFiles, saveActiveProject} from 'ng-morph';

import {ALL_FILES} from '../../../constants';

export function replaceTemplateLineEndings(
    fileSystem: FileSystem,
    pattern = ALL_FILES,
): void {
    getActiveProject();

    getSourceFiles(pattern).forEach((file) => {
        file.replaceWithText(file.getFullText().replaceAll(/\r?\n|\r|\n/g, EOL));
    });

    fileSystem.commitEdits();
    saveActiveProject();
}
