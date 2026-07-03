import {type Tree} from '@angular-devkit/schematics';
import {getSourceFiles, type SourceFile, SyntaxKind} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {insertTodo} from '../../../utils/insert-todo';
import {getDialogOptions} from './utils/get-dialog-options';

const DOCS_LINK = 'https://taiga-ui.dev/components/dialog';
const TODO_MESSAGE = `dialog \`header\` option (content shown above the title) was removed from \`TuiDialogOptions\` in v5. To keep content above the title, pass an empty \`label\` and place \`tuiHeader\` in the dialog template where you need it. For a plain string title, use \`label\` instead. See: ${DOCS_LINK}`;

export function migrateDialogHeader(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        migrateSourceFile(sourceFile);
    });
}

function migrateSourceFile(sourceFile: SourceFile): void {
    sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach((call) => {
        if (call.wasForgotten()) {
            return;
        }

        const headerProperty = getDialogOptions(call)?.getProperty('header');

        if (headerProperty) {
            insertTodo(headerProperty, TODO_MESSAGE);
        }
    });
}
