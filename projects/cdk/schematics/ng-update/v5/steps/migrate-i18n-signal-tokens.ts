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
const TO_SIGNAL = 'toSignal';
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

    const initText = initializer.getText();

    if (initText.startsWith(`${SIGNAL}(`) || initText.startsWith(`${TO_SIGNAL}(`)) {
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

    if (isPlainLiteral(initializer)) {
        wrapWithSignal(useValueProp, initText);

        return;
    }

    // Any other initializer is a real Observable. `toSignal()` needs an injection
    // context, which a static `useValue` is not, so promote the provider to a
    // `useFactory` where the factory body runs inside DI.
    promoteToFactory(useValueProp, initText);
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
        insertTodoOnce(provideProp);

        return;
    }

    const bodyText = body.getText();

    if (bodyText.startsWith(`${TO_SIGNAL}(`) || bodyText.startsWith(`${SIGNAL}(`)) {
        return;
    }

    const params = initializer
        .getParameters()
        .map((parameter) => parameter.getText())
        .join(', ');

    useFactoryProp.setInitializer(`(${params}) => ${TO_SIGNAL}(${bodyText})`);
    addUniqueImport(
        useFactoryProp.getSourceFile().getFilePath(),
        TO_SIGNAL,
        RXJS_INTEROP,
    );
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
