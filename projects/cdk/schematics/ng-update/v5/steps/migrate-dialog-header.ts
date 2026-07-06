import {type Tree} from '@angular-devkit/schematics';
import {getSourceFiles, type SourceFile, SyntaxKind} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {TODO_MARK} from '../../../utils/insert-todo';
import {getDialogOptions} from './utils/get-dialog-options';

const DOCS_LINK = 'https://taiga-ui.dev/components/dialog';

const TODO_MESSAGE = `dialog \`header\` option (content shown above the title) was removed from \`TuiDialogOptions\` in v5. To keep content above the title, pass an empty \`label\` and place \`tuiHeader\` in the dialog template where you need it. See: ${DOCS_LINK}`;

export function migrateDialogHeader(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        migrateSourceFile(sourceFile);
    });
}

function migrateSourceFile(sourceFile: SourceFile): void {
    // Collect every insertion position up front: `insertText` forgets the whole ts-morph
    // node tree, so we cannot re-read `header` nodes after the first insert.
    const linePositions = sourceFile
        .getDescendantsOfKind(SyntaxKind.CallExpression)
        .map((call) => getDialogOptions(call)?.getProperty('header')?.getStartLinePos())
        .filter((position): position is number => position !== undefined);

    // Insert bottom-to-top so each insertion only shifts offsets after it, keeping the
    // remaining (earlier) positions valid.
    [...new Set(linePositions)]
        .sort((a, b) => b - a)
        .forEach((position) => {
            sourceFile.insertText(position, `// ${TODO_MARK} ${TODO_MESSAGE}\n`);
        });
}
