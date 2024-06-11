import type {Node} from '@taiga-ui/morph';

export const TODO_MARK = 'TODO: (Taiga UI migration)';

export function insertTodo(node: Node, message: string): void {
    const startLinePos = node.getStartLinePos();
    const sourceFile = node.getSourceFile();

    sourceFile.insertText(startLinePos, `// ${TODO_MARK} ${message}\n`);
}
