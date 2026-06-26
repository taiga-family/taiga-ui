import {type Tree} from '@angular-devkit/schematics';
import {
    getSourceFiles,
    Node,
    Scope,
    type SetAccessorDeclaration,
    type SourceFile,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {insertTodo} from '../../../utils/insert-todo';

const DIRECTIVE_NAMES = ['TuiTextfieldDropdownDirective', 'TuiDropdownContent'];

const TODO_MESSAGE =
    'Replace @ViewChild setter with viewChild() + effect(() => this.<signal>.set(this.<name>())). See https://taiga-ui.dev/components/textfield';

const SCOPE_TEXT: Record<Scope, string> = {
    [Scope.Private]: 'private',
    [Scope.Protected]: 'protected',
    [Scope.Public]: 'public',
};

interface ViewChildToken {
    readonly options: Node | undefined;
    readonly token: string;
}

export function migrateViewChildDropdown(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        sourceFile
            .getClasses()
            .flatMap((classDeclaration) => classDeclaration.getSetAccessors())
            .forEach((setter) => migrateSetter(setter, sourceFile));
    });
}

function migrateSetter(setter: SetAccessorDeclaration, sourceFile: SourceFile): void {
    const decoratorToken = getViewChildDirectiveToken(setter);

    if (!decoratorToken) {
        return;
    }

    const signalFieldName = getSignalFieldName(setter);

    if (!signalFieldName) {
        insertTodo(setter, TODO_MESSAGE);

        return;
    }

    applyViewChildReplacement(setter, decoratorToken, signalFieldName, sourceFile);
}

function getViewChildDirectiveToken(
    setter: SetAccessorDeclaration,
): ViewChildToken | null {
    const viewChildDecorator = setter.getDecorator('ViewChild');

    if (!viewChildDecorator) {
        return null;
    }

    const [token, options] = viewChildDecorator.getArguments();

    if (!token) {
        return null;
    }

    const tokenText = token.getText();
    const hasDirective = DIRECTIVE_NAMES.some((name) => tokenText.includes(name));

    return hasDirective ? {token: tokenText, options: options} : null;
}

function getSignalFieldName(setter: SetAccessorDeclaration): string | null {
    const bodyNode = setter.getBody();

    if (!Node.isBlock(bodyNode)) {
        return null;
    }

    const statements = bodyNode.getStatements();
    const [stmt] = statements;

    const isSingleExprStatement =
        setter.getParameters().length === 1 &&
        statements.length === 1 &&
        Node.isExpressionStatement(stmt);

    return isSingleExprStatement
        ? extractThisSignalSetFieldName(stmt.getExpression())
        : null;
}

function applyViewChildReplacement(
    setter: SetAccessorDeclaration,
    {token, options}: ViewChildToken,
    signalFieldName: string,
    sourceFile: SourceFile,
): void {
    const setterName = setter.getName();
    const scopeStr = SCOPE_TEXT[setter.getScope() ?? Scope.Protected];
    const decoratorArgs = options ? `${token}, ${options.getText()}` : token;
    const indent = getIndent(setter.getText());

    setter.replaceWithText(
        [
            `${scopeStr} readonly ${setterName} = viewChild(${decoratorArgs});`,
            `${indent}${scopeStr} readonly ${setterName}Ef = effect(() => this.${signalFieldName}.set(this.${setterName}()));`,
        ].join('\n'),
    );

    addUniqueImport(sourceFile.getFilePath(), 'viewChild', '@angular/core');
    addUniqueImport(sourceFile.getFilePath(), 'effect', '@angular/core');
}

function extractThisSignalSetFieldName(node: Node): string | null {
    if (!Node.isCallExpression(node)) {
        return null;
    }

    const callExpr = node.getExpression();

    if (!Node.isPropertyAccessExpression(callExpr) || callExpr.getName() !== 'set') {
        return null;
    }

    const receiver = callExpr.getExpression();

    return !Node.isPropertyAccessExpression(receiver) ||
        !Node.isThisExpression(receiver.getExpression())
        ? null
        : receiver.getName();
}

function getIndent(text: string): string {
    const match = /^(\s*)/.exec(text);

    return match?.[1] ?? '    ';
}
