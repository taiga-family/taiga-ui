import {type Tree} from '@angular-devkit/schematics';
import {
    Node,
    type ObjectLiteralExpression,
    type PropertyAssignment,
    saveActiveProject,
} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {infoLog} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {insertTodo, TODO_MARK} from '../../../utils/insert-todo';

const ANGULAR_CORE = '@angular/core';
const RXJS_INTEROP = '@angular/core/rxjs-interop';
const SIGNAL = 'signal';
const COMPUTED = 'computed';
const TO_SIGNAL = 'toSignal';
const SIGNAL_FACTORIES: readonly string[] = [SIGNAL, COMPUTED, TO_SIGNAL];
const MAX_REFERENCE_DEPTH = 5;
const RXJS_OF = 'of';
const TAIGA_KIT = '@taiga-ui/kit';

/**
 * Kit i18n tokens built via `tuiExtractI18n`. Their type changed from
 * `Observable<T>` to `Signal<T>` in v5 (the factory switched from
 * `inject(TUI_LANGUAGE).pipe(map(...))` to `computed(...)`), so any
 * `{provide, useValue: of(...)}` provider no longer type-checks.
 */
const KIT_I18N_TOKENS = [
    'TUI_CONFIRM_WORDS',
    'TUI_CANCEL_WORD',
    'TUI_DONE_WORD',
    'TUI_MORE_WORD',
    'TUI_HIDE_TEXT',
    'TUI_SHOW_ALL_TEXT',
    'TUI_OTHER_DATE_TEXT',
    'TUI_CHOOSE_DAY_OR_RANGE_TEXTS',
    'TUI_FROM_TO_TEXTS',
    'TUI_PLUS_MINUS_TEXTS',
    'TUI_TIME_TEXTS',
    'TUI_DATE_TEXTS',
    'TUI_DIGITAL_INFORMATION_UNITS',
    'TUI_COPY_TEXTS',
    'TUI_PASSWORD_TEXTS',
    'TUI_CALENDAR_MONTHS',
    'TUI_FILE_TEXTS',
    'TUI_PAGINATION_TEXTS',
    'TUI_INPUT_FILE_TEXTS',
    'TUI_MULTI_SELECT_TEXTS',
    'TUI_COUNTRIES',
    'TUI_PREVIEW_TEXTS',
    'TUI_PREVIEW_ZOOM_TEXTS',
    'TUI_INTERNATIONAL_SEARCH',
    'TUI_DAY_RANGE_PERIODS',
] as const;

type ValueKind = 'plain' | 'signal' | 'stream' | 'unknown';

type ConvertibleKind = Extract<ValueKind, 'plain' | 'stream'>;

const TODO_MESSAGE =
    'i18n token is a Signal in v5, not an Observable. Provide the value via signal(...), or convert an existing stream with toSignal(...).';

export function migrateI18nSignalTokens(_tree: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating kit i18n token providers to signal-based values...');
    }

    for (const tokenName of KIT_I18N_TOKENS) {
        for (const ref of getNamedImportReferences(tokenName, TAIGA_KIT)) {
            if (ref.wasForgotten()) {
                continue;
            }

            const parent = ref.getParent();

            if (
                !parent ||
                Node.isImportSpecifier(parent) ||
                !Node.isPropertyAssignment(parent) ||
                parent.getName() !== 'provide'
            ) {
                continue;
            }

            const objectLiteral = parent.getParent();

            if (objectLiteral && Node.isObjectLiteralExpression(objectLiteral)) {
                migrateProvider(objectLiteral, parent);
            }
        }
    }

    saveActiveProject();
}

function migrateProvider(
    objectLiteral: ObjectLiteralExpression,
    provideProp: PropertyAssignment,
): void {
    const useValueProp = objectLiteral.getProperty('useValue');

    if (useValueProp && Node.isPropertyAssignment(useValueProp)) {
        migrateUseValue(useValueProp, provideProp);

        return;
    }

    const useFactoryProp = objectLiteral.getProperty('useFactory');

    if (useFactoryProp && Node.isPropertyAssignment(useFactoryProp)) {
        migrateUseFactory(useFactoryProp, provideProp);

        return;
    }

    insertTodoOnce(provideProp);
}

function migrateUseValue(
    useValueProp: PropertyAssignment,
    provideProp: PropertyAssignment,
): void {
    const initializer = useValueProp.getInitializer();

    if (!initializer) {
        insertTodoOnce(provideProp);

        return;
    }

    if (
        Node.isCallExpression(initializer) &&
        initializer.getExpression().getText() === RXJS_OF &&
        initializer.getArguments().length === 1
    ) {
        wrapWithSignal(useValueProp, initializer.getArguments()[0]?.getText() ?? '');

        return;
    }

    switch (classifyValue(initializer)) {
        case 'plain':
            wrapWithSignal(useValueProp, initializer.getText());
            break;
        case 'signal':
            break;
        // `toSignal()` needs an injection context, which a static `useValue` is not.
        case 'stream':
            promoteToFactory(useValueProp, initializer.getText());
            break;
        case 'unknown':
            insertTodoOnce(provideProp);
            break;
    }
}

function migrateUseFactory(
    useFactoryProp: PropertyAssignment,
    provideProp: PropertyAssignment,
): void {
    const initializer = useFactoryProp.getInitializer();

    if (!initializer || !Node.isArrowFunction(initializer)) {
        insertTodoOnce(provideProp);

        return;
    }

    const body = initializer.getBody();

    if (Node.isBlock(body)) {
        migrateFactoryBlock(useFactoryProp, provideProp);

        return;
    }

    const kind = classifyValue(body);

    if (kind === 'signal') {
        return;
    }

    if (kind === 'unknown') {
        insertTodoOnce(provideProp);

        return;
    }

    const params = initializer
        .getParameters()
        .map((parameter) => parameter.getText())
        .join(', ');

    useFactoryProp.setInitializer(`(${params}) => ${asSignalText(body, kind)}`);
    addSignalImport(useFactoryProp, kind);
}

// Factory runs inside DI, so returned streams are wrapped; a block with nothing to return stays a TODO.
function migrateFactoryBlock(
    useFactoryProp: PropertyAssignment,
    provideProp: PropertyAssignment,
): void {
    // Replacing back to front keeps the earlier nodes valid.
    for (const expression of getFactoryReturnExpressions(useFactoryProp).reverse()) {
        const kind = classifyValue(expression);

        if (kind === 'plain' || kind === 'stream') {
            expression.replaceWithText(asSignalText(expression, kind));
            addSignalImport(useFactoryProp, kind);
        }
    }

    const returns = getFactoryReturnExpressions(useFactoryProp);

    // Inserting a TODO re-creates the provider node, so it has to go last.
    if (
        returns.length === 0 ||
        returns.some((expression) => classifyValue(expression) === 'unknown')
    ) {
        insertTodoOnce(provideProp);
    }
}

// Only returns owned by the factory arrow itself — returns inside nested functions/classes are their own scope.
function getFactoryReturnExpressions(useFactoryProp: PropertyAssignment): Node[] {
    const initializer = useFactoryProp.getInitializer();

    if (!initializer || !Node.isArrowFunction(initializer)) {
        return [];
    }

    const body = initializer.getBody();

    if (!Node.isBlock(body)) {
        return [];
    }

    const expressions: Node[] = [];

    body.forEachDescendant((node, traversal) => {
        if (isNestedFunctionScope(node)) {
            traversal.skip();

            return;
        }

        if (Node.isReturnStatement(node)) {
            const expression = node.getExpression();

            if (expression) {
                expressions.push(expression);
            }
        }
    });

    return expressions;
}

function isNestedFunctionScope(node: Node): boolean {
    return (
        Node.isFunctionDeclaration(node) ||
        Node.isFunctionExpression(node) ||
        Node.isArrowFunction(node) ||
        Node.isMethodDeclaration(node) ||
        Node.isConstructorDeclaration(node) ||
        Node.isGetAccessorDeclaration(node) ||
        Node.isSetAccessorDeclaration(node) ||
        Node.isClassDeclaration(node) ||
        Node.isClassExpression(node)
    );
}

// Schematics run without library typings, so values are classified by following their declarations.
function classifyValue(node: Node, depth = 0): ValueKind {
    const expression = unwrapParentheses(node);

    if (isPlainLiteral(expression)) {
        return 'plain';
    }

    if (Node.isCallExpression(expression)) {
        return isSignalFactory(expression.getExpression()) ? 'signal' : 'stream';
    }

    if (!Node.isIdentifier(expression) && !Node.isPropertyAccessExpression(expression)) {
        return 'stream';
    }

    const declared = depth < MAX_REFERENCE_DEPTH && getDeclaredInitializer(expression);

    if (declared) {
        return classifyValue(declared, depth + 1);
    }

    const name = Node.isIdentifier(expression)
        ? expression.getText()
        : expression.getName();

    return name.endsWith('$') ? 'stream' : 'unknown';
}

function unwrapParentheses(node: Node): Node {
    return Node.isParenthesizedExpression(node)
        ? unwrapParentheses(node.getExpression())
        : node;
}

function isSignalFactory(callee: Node): boolean {
    const expression = unwrapParentheses(callee);

    if (!Node.isIdentifier(expression)) {
        return false;
    }

    const declaration = expression.getSymbol()?.getDeclarations()[0];

    if (!declaration) {
        return SIGNAL_FACTORIES.includes(expression.getText());
    }

    if (!Node.isImportSpecifier(declaration)) {
        return false;
    }

    const moduleName = declaration.getImportDeclaration().getModuleSpecifierValue();

    return (
        SIGNAL_FACTORIES.includes(declaration.getName()) &&
        (moduleName === ANGULAR_CORE || moduleName === RXJS_INTEROP)
    );
}

function getDeclaredInitializer(node: Node): Node | undefined {
    const symbol = node.getSymbol();
    const declaration = (symbol?.getAliasedSymbol() ?? symbol)?.getDeclarations()[0];

    return Node.isVariableDeclaration(declaration) ||
        Node.isPropertyAssignment(declaration) ||
        Node.isPropertyDeclaration(declaration)
        ? declaration.getInitializer()
        : undefined;
}

function asSignalText(node: Node, kind: ConvertibleKind): string {
    return `${kind === 'plain' ? SIGNAL : TO_SIGNAL}(${node.getText()})`;
}

function addSignalImport(node: Node, kind: ConvertibleKind): void {
    const filePath = node.getSourceFile().getFilePath();

    if (kind === 'plain') {
        addUniqueImport(filePath, SIGNAL, ANGULAR_CORE);
    } else {
        addUniqueImport(filePath, TO_SIGNAL, RXJS_INTEROP);
    }
}

function wrapWithSignal(useValueProp: PropertyAssignment, valueText: string): void {
    useValueProp.setInitializer(`${SIGNAL}(${valueText})`);
    addUniqueImport(useValueProp.getSourceFile().getFilePath(), SIGNAL, ANGULAR_CORE);
}

function promoteToFactory(useValueProp: PropertyAssignment, exprText: string): void {
    const filePath = useValueProp.getSourceFile().getFilePath();

    useValueProp.replaceWithText(`useFactory: () => ${TO_SIGNAL}(${exprText})`);
    addUniqueImport(filePath, TO_SIGNAL, RXJS_INTEROP);
}

function isPlainLiteral(node: Node): boolean {
    return (
        Node.isStringLiteral(node) ||
        Node.isNoSubstitutionTemplateLiteral(node) ||
        Node.isArrayLiteralExpression(node) ||
        Node.isObjectLiteralExpression(node)
    );
}

function insertTodoOnce(node: Node): void {
    const alreadyMarked = node
        .getLeadingCommentRanges()
        .some((range) => range.getText().includes(TODO_MARK));

    if (!alreadyMarked) {
        insertTodo(node, TODO_MESSAGE);
    }
}
