import {type Node} from 'ng-morph';

export const TODO_MARK = 'TODO: (Taiga UI migration)';

export const LABEL_OUTSIDE_TODO_MESSAGE =
    '[tuiTextfieldLabelOutside] is dynamic — cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or input[placeholder] for outside label.';

export function insertTodo(node: Node, message: string): void {
    const startLinePos = node.getStartLinePos();
    const sourceFile = node.getSourceFile();

    sourceFile.insertText(startLinePos, `// ${TODO_MARK} ${message}\n`);
}
