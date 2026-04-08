import {type Tree} from '@angular-devkit/schematics';
import {Node as MorphNode, type Node} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {insertTodo} from '../../../utils/insert-todo';

const ARROW_MODE_IDENTIFIERS = [
    'TUI_ARROW_MODE',
    'TuiArrowMode',
    'TUI_ARROW_DEFAULT_MODE',
    'tuiArrowModeProvider',
];

const TODO_MESSAGE =
    'TUI_ARROW_MODE has been removed. Use TuiChevron directive from @taiga-ui/kit instead';

export function migrateArrowMode(_tree: Tree, _options: TuiSchema): void {
    const refs = new Map<string, Node>();

    ARROW_MODE_IDENTIFIERS.forEach((identifier) => {
        getNamedImportReferences(identifier, '@taiga-ui/legacy').forEach((ref) => {
            if (ref.wasForgotten() || MorphNode.isImportSpecifier(ref.getParent())) {
                return;
            }

            const key = `${ref.getSourceFile().getFilePath()}:${ref.getStartLinePos()}`;

            if (!refs.has(key)) {
                refs.set(key, ref);
            }
        });
    });

    [...refs.values()]
        .sort((a, b) => b.getStartLinePos() - a.getStartLinePos())
        .forEach((ref) => insertTodo(ref, TODO_MESSAGE));
}
