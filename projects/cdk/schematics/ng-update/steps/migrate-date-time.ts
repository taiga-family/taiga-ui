import {CallExpression, Identifier, Node, SyntaxKind} from 'ng-morph';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {insertTodo} from '../../utils/insert-todo';
import {
    infoLog,
    PROCESSING_SYMBOL,
    processLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getExecutionTime} from '../../utils/get-execution-time';

export function dateTimeMigrations() {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating taiga date/time...`);

    let start = performance.now();
    migrateProperty({
        namedImport: 'TuiDay',
        moduleSpecifier: '@taiga-ui/cdk',
        from: 'formattedDay',
        callback: node =>
            node.replaceWithText(
                node.getText().replace('formattedDay', 'getFormattedDay("DMY", ".")'),
            ),
    });
    processLog(
        `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}TuiDay.formattedDay ` +
            `(${getExecutionTime(start, performance.now())})`,
    );

    start = performance.now();
    migrateProperty({
        namedImport: 'TuiDayRange',
        moduleSpecifier: '@taiga-ui/cdk',
        from: 'formattedDayRange',
        callback: node =>
            node.replaceWithText(
                node
                    .getText()
                    .replace('formattedDayRange', 'getFormattedDayRange("DMY", ".")'),
            ),
    });
    processLog(
        `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}TuiDayRange.formattedDayRange ` +
            `(${getExecutionTime(start, performance.now())})`,
    );

    start = performance.now();
    migrateProperty({
        namedImport: 'TuiDayRange',
        moduleSpecifier: '@taiga-ui/cdk',
        from: 'normalizeParse',
        callback: node => {
            const parent = node.getParent();
            if (Node.isCallExpression(parent)) {
                changeNormalizeArgs(parent);
            }
        },
    });
    processLog(
        `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}TuiDayRange.normalizeParse ` +
            `(${getExecutionTime(start, performance.now())})`,
    );

    [
        {
            namedImport: 'TuiMonthRange',
            field: 'formattedMonthRange',
            message:
                'formattedMonthRange has been removed in 3.0. Please use TUI_MONTH_FORMATTER from @taiga-ui/kit',
        },
        {
            namedImport: 'TuiMonth',
            field: 'formattedMonth',
            message:
                'formattedMonth has been removed in 3.0. Please use TUI_MONTH_FORMATTER from @taiga-ui/kit',
        },
        {
            namedImport: 'TuiDay',
            field: 'getDayFromMonthRowCol',
            message:
                'getDayFromMonthRowCol has been removed in 3.0. If you need this utils check out this pipe https://github.com/Tinkoff/taiga-ui/tree/main/projects/core/pipes/calendar-sheet',
        },
        {
            namedImport: 'TuiMonth',
            field: 'monthStartDaysOffset',
            message:
                'monthStartDaysOffset has been removed in 3.0. If you need this utils check out this pipe https://github.com/Tinkoff/taiga-ui/tree/main/projects/core/pipes/calendar-sheet',
        },
        {
            namedImport: 'TuiMonth',
            field: 'weeksRowsCount',
            message:
                'weeksRowsCount has been removed in 3.0. If you need this utils check out this pipe https://github.com/Tinkoff/taiga-ui/tree/main/projects/core/pipes/calendar-sheet',
        },
        {
            namedImport: 'TuiYear',
            field: 'getYearStartDaysOffset',
            message:
                'getYearStartDaysOffset has been removed in 3.0. If you need this utils check out this pipe https://github.com/Tinkoff/taiga-ui/tree/main/projects/core/pipes/calendar-sheet',
        },
        {
            namedImport: 'TuiYear',
            field: 'weeksRowsCount',
            message:
                'weeksRowsCount has been removed in 3.0. If you need this utils check out this pipe https://github.com/Tinkoff/taiga-ui/tree/main/projects/core/pipes/calendar-sheet',
        },
    ].forEach(({namedImport, field, message}) => {
        start = performance.now();
        migrateProperty({
            namedImport,
            moduleSpecifier: '@taiga-ui/cdk',
            from: field,
            callback: node => insertTodoBeforeNode(node, message),
        });
        processLog(
            `${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}${namedImport}.${field} ` +
                `(${getExecutionTime(start, performance.now())})`,
        );
    });

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} date/time migrated \n`);
}

function migrateProperty({
    namedImport,
    moduleSpecifier,
    from,
    callback,
}: {
    namedImport: string;
    moduleSpecifier: string;
    from: string;
    callback: (node: Node) => void;
}) {
    const references = getNamedImportReferences(namedImport, moduleSpecifier);

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }
        const parent = ref.getParent();

        if (!parent) {
            return;
        }

        if (Node.isNewExpression(parent)) {
            const accessExpression = parent.getFirstAncestorByKind(
                SyntaxKind.PropertyAccessExpression,
            );
            const searched = accessExpression
                ?.getChildrenOfKind(SyntaxKind.Identifier)
                .find(identifier => identifier.getText() === from);

            if (searched && accessExpression) {
                callback(accessExpression);
                return;
            }
        }

        if (Node.isPropertyAccessExpression(parent)) {
            const searched = parent
                .getChildrenOfKind(SyntaxKind.Identifier)
                .find(identifier => identifier.getText() === from);
            if (searched && !parent.wasForgotten()) {
                callback(parent);
                return;
            }
        }

        replaceIdentifier(parent, from, callback);
    });
}

function replaceIdentifier(node: Node, from: string, callback: (node: Node) => void) {
    const declaration =
        node.getFirstAncestorByKind(SyntaxKind.VariableDeclaration) ||
        node.getFirstAncestorByKind(SyntaxKind.PropertyDeclaration);

    const identifier = declaration?.getFirstDescendantByKind(SyntaxKind.Identifier);

    if (identifier) {
        replaceIdentifierReferences(identifier, from, callback);
    }
}

function replaceIdentifierReferences(
    identifier: Identifier,
    from: string,
    callback: (node: Node) => void,
) {
    identifier
        .findReferencesAsNodes()
        /**
         * `findReferencesAsNodes` has strange behavior.
         * Imagine schematics run on the following file:
         * ```
         * class Dummy {
         *  var = 5;
         *  method1() {
         *      const {var} = this; // (1)
         *      return var; // (2)
         *  }
         *  method2() {
         *      const {var} = this; // (3)
         *  }
         * }
         * ```
         * If `identifier` is equal to `var` from `method1` (1),
         * then `identifier.findReferencesAsNodes` will return array with 2 references: (2) and (3).
         */
        .filter(ref => areBothObjectDestructuring(ref, identifier))
        .forEach(ref => {
            if (ref.wasForgotten()) {
                return;
            }
            let parent = ref.getParent();

            if (
                parent?.getText() === `this.${identifier.getText()}` ||
                parent?.getText() === identifier.getText()
            ) {
                replaceIdentifier(parent, from, callback);
            }

            if (parent?.wasForgotten()) {
                return;
            }

            if (parent?.getText().startsWith('this')) {
                parent = parent?.getParent();
            }

            if (Node.isPropertyAccessExpression(parent)) {
                const searched = parent
                    .getChildrenOfKind(SyntaxKind.Identifier)
                    .find(identifier => identifier.getText() === from);
                if (searched) {
                    callback(parent!);
                }
            }
        });
}

function changeNormalizeArgs(node: CallExpression) {
    const args = node.getArguments();
    if (args.length > 2) {
        node.removeArgument(2);
        node.removeArgument(1);
        node.addArgument('"DMY"');
    } else if (args.length === 1) {
        node.addArgument('"DMY"');
    }
}

function insertTodoBeforeNode(node: Node, message: string) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    if (identifier) {
        insertTodo(identifier, message);
    }
}

function areBothObjectDestructuring(ref: Node, identifier: Identifier): boolean {
    return !(
        identifier.getFirstAncestorByKind(SyntaxKind.BindingElement) &&
        ref.getFirstAncestorByKind(SyntaxKind.BindingElement)
    );
}
