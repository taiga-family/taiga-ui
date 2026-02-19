/// <reference lib="es2021" />

import {getSourceFiles, saveActiveProject} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';

export function migratePackages(): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        sourceFile.replaceWithText(
            sourceFile
                .getFullText()
                .replaceAll(
                    '@taiga-ui/i18n/languages/japan',
                    '@taiga-ui/i18n/languages/japanese',
                ),
        );
    });

    saveActiveProject();
}
