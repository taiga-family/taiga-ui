import {type Tree} from '@angular-devkit/schematics';
import {type Node, Node as NgMorphNode, saveActiveProject, SyntaxKind} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {insertTodo} from '../../../utils/insert-todo';

const LEGACY = '@taiga-ui/legacy';

const MESSAGE =
    'TuiInputTagComponent has been removed with no drop-in class replacement. <tui-input-tag> now migrates to <tui-textfield multi> with <input tuiInputChip>, which is a directive on <input> — there is no component to @ViewChild/inject. Add a template ref to the migrated <input tuiInputChip>, query it with @ViewChild(ref, {read: ElementRef}) and replace `.nativeFocusableElement` with `.nativeElement`. See https://taiga-ui.dev/components/input-chip';

const ANCHOR_KINDS = new Set<SyntaxKind>([
    SyntaxKind.PropertyDeclaration,
    SyntaxKind.GetAccessor,
    SyntaxKind.MethodDeclaration,
    SyntaxKind.VariableStatement,
    SyntaxKind.ExpressionStatement,
    SyntaxKind.PropertyAssignment,
]);

export function migrateInputTagComponent(_tree: Tree, _options: TuiSchema): void {
    const seen = new Set<string>();

    for (const ref of getNamedImportReferences('TuiInputTagComponent', LEGACY)) {
        if (ref.wasForgotten() || NgMorphNode.isImportSpecifier(ref.getParent())) {
            continue;
        }

        const anchor =
            ref.getFirstAncestor((node: Node) => ANCHOR_KINDS.has(node.getKind())) ?? ref;

        const key = `${anchor.getSourceFile().getFilePath()}:${anchor.getStartLinePos()}`;

        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        insertTodo(anchor, MESSAGE);
    }

    saveActiveProject();
}
