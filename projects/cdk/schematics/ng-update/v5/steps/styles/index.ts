import {getSourceFiles, saveActiveProject} from 'ng-morph';

import {ALL_STYLE_FILES, PROJECT_JSON_FILES} from '../../../../constants';
import {addStyleComments} from './add-comments';
import {migrateImports} from './migrate-imports';

const ACTIONS = [
    migrateImports,
    addStyleComments,
    (file: string) =>
        file.replaceAll(/tui-slider-ticks-labels\([^)]*\)/g, 'tui-slider-ticks-labels()'),
] as const;

export function migrateStyles(): void {
    getSourceFiles([...ALL_STYLE_FILES, ...PROJECT_JSON_FILES]).forEach((sourceFile) => {
        sourceFile.replaceWithText(
            ACTIONS.reduce(
                (content, action) => action(content),
                sourceFile.getFullText(),
            ),
        );
    });

    saveActiveProject();
}
