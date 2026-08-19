import {type Tree} from '@angular-devkit/schematics';
import {Node as NgMorphNode, type Node, saveActiveProject, SyntaxKind} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {TODO_MARK} from '../../../utils/insert-todo';

const LEGACY = '@taiga-ui/legacy';

const MESSAGE =
    'TuiInputTagComponent has been removed with no drop-in class replacement. <tui-input-tag> now migrates to <tui-textfield multi> with <input tuiInputChip>, which is a directive on <input> — there is no component to @ViewChild/inject. Add a template ref to the migrated <input tuiInputChip>, query it with @ViewChild(ref, {read: ElementRef}) and replace `.nativeFocusableElement` with `.nativeElement`. See https://taiga-ui.dev/components/input-chip';

const ANCHOR_KINDS = new Set<SyntaxKind>([
    SyntaxKind.ExpressionStatement,
    SyntaxKind.GetAccessor,
    SyntaxKind.MethodDeclaration,
    SyntaxKind.PropertyAssignment,
    SyntaxKind.PropertyDeclaration,
    SyntaxKind.VariableStatement,
]);

type SourceFile = ReturnType<Node['getSourceFile']>;

export function migrateInputTagComponent(_tree: Tree, _options: TuiSchema): void {
    // Dedupe anchors, then insert bottom-up: each insertText shifts later offsets.
    const targets = new Map<string, {sourceFile: SourceFile; pos: number}>();

    for (const ref of getNamedImportReferences('TuiInputTagComponent', LEGACY)) {
        if (ref.wasForgotten() || NgMorphNode.isImportSpecifier(ref.getParent())) {
            continue;
        }

        const anchor =
            ref.getFirstAncestor((node: Node) => ANCHOR_KINDS.has(node.getKind())) ?? ref;

        const sourceFile = anchor.getSourceFile();
        const pos = anchor.getStartLinePos();

        targets.set(`${sourceFile.getFilePath()}:${pos}`, {sourceFile, pos});
    }

    const ordered = [...targets.values()].sort((a, b) => b.pos - a.pos);

    for (const {sourceFile, pos} of ordered) {
        sourceFile.insertText(pos, `// ${TODO_MARK} ${MESSAGE}\n`);
    }

    saveActiveProject();
}
