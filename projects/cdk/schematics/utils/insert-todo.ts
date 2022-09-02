import type {Identifier} from 'ng-morph';

export const TODO_MARK = `TODO: (Taiga UI migration)`;

export function insertTodo(identifier: Identifier, message: string) {
    const startLinePos = identifier.getStartLinePos();
    const sourceFile = identifier.getSourceFile();
    sourceFile.insertText(startLinePos, `// ${TODO_MARK} ${message}\n`);
}
