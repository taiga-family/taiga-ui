import {
    infoLog,
    Node,
    type ObjectLiteralExpression,
    type PropertyAccessExpression,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
    SyntaxKind,
} from 'ng-morph';
import {type CallExpression, type ObjectLiteralElementLike} from 'ts-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';

const OPTIONS_MIGRATIONS: Record<
    string,
    (property: ObjectLiteralElementLike) => unknown
> = {
    autoClose: (property) => {
        const [propertyKey, propertyValue] = property.getText().split(/\s?:\s?/);

        switch (propertyValue) {
            case 'false':
                return property.replaceWithText(`${propertyKey}: 0`);
            case 'true':
                return property.replaceWithText(`${propertyKey}: 3_000`);
            default:
                return null;
        }
    },
    defaultAutoCloseTime: (property) =>
        property.replaceWithText(
            property.getText().replace('defaultAutoCloseTime', 'autoClose'),
        ),
    status: (property) =>
        property.replaceWithText(property.getText().replace('status', 'appearance')),
    hasCloseButton: (property) =>
        property.replaceWithText(
            property.getText().replace('hasCloseButton', 'closeable'),
        ),
    hasIcon: (property) => {
        const [, propertyValue] = property.getText().split(/\s?:\s?/);

        switch (propertyValue) {
            case 'false':
                return property.replaceWithText("icon: ''");
            case 'true':
                return property.remove();
            default:
                return property.replaceWithText(
                    `// TODO: (Taiga UI migration) "hasIcon" is deleted. Use "icon: ''" to hide icon. Use "icon: TUI_NOTIFICATION_DEFAULT_OPTIONS['icon']" to show it.\n${property.getText()}`,
                );
        }
    },
};

export function migrateAlertService(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing inject(TuiAlertService).open({autoClose: boolean})...`,
        );

    const alertServiceRefs = getNamedImportReferences(
        'TuiAlertService',
        '@taiga-ui/core',
    );

    // inject(TuiAlertService).open(...)
    const viaDirectInjects = alertServiceRefs.map((x) =>
        x.getFirstAncestor(
            (node): node is CallExpression =>
                node.isKind(SyntaxKind.CallExpression) &&
                node.getFullText().includes('inject(TuiAlertService') &&
                node.getFullText().includes('.open'),
        ),
    );

    // readonly alertService = inject(TuiAlertService);
    const viaClassProperty = alertServiceRefs
        .map((x) =>
            x
                .getFirstAncestorByKind(SyntaxKind.PropertyDeclaration)
                ?.findReferencesAsNodes(),
        )
        .flat()
        .map(toAlertServiceOpenCallExpression);

    // constructor(private readonly legacyWayService: TuiAlertService) {}
    const viaConstructorParam = alertServiceRefs
        .map((x) =>
            x.getFirstAncestorByKind(SyntaxKind.Parameter)?.findReferencesAsNodes(),
        )
        .flat()
        .map(toAlertServiceOpenCallExpression);

    const inlineAlertOptions: ObjectLiteralExpression[] = [];

    [...viaDirectInjects, ...viaClassProperty, ...viaConstructorParam].forEach(
        (callExpression) => {
            if (!callExpression || callExpression.wasForgotten()) {
                return;
            }

            const [, arg] = callExpression.getArguments();
            const expression = arg?.isKind(SyntaxKind.PropertyAccessExpression)
                ? findOptionsInitializer(arg)
                : arg;

            if (Node.isObjectLiteralExpression(expression)) {
                inlineAlertOptions.push(expression);
            }
        },
    );

    const standaloneAlertOptions = getNamedImportReferences(
        'TuiAlertOptions',
        '@taiga-ui/core',
    )
        .map((n) => {
            const type = n.getFirstAncestorByKind(SyntaxKind.TypeReference);
            const siblings = [
                ...(type?.getPreviousSiblings() || []),
                ...(type?.getNextSiblings() || []),
            ];

            return siblings.find(Node.isObjectLiteralExpression);
        })
        .filter(<T>(x: T | undefined): x is T => !!x);

    [...inlineAlertOptions, ...standaloneAlertOptions].forEach((options) => {
        Object.entries(OPTIONS_MIGRATIONS).forEach(([propertyName, migration]) => {
            const property = options.getProperty(propertyName);

            if (!property) {
                return;
            }

            const isShorthandPropertyAssignment =
                Node.isShorthandPropertyAssignment(property) &&
                !property.hasObjectAssignmentInitializer();
            const previousPropertyText = property.getText();

            migration(property);

            if (isShorthandPropertyAssignment && !property.wasForgotten()) {
                property.replaceWithText(
                    `${property.getText()}: ${previousPropertyText}`,
                );
            }
        });
    });

    !options['skip-logs'] &&
        successLog(
            `${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} "true => 3_000" & "false => 0" were replaced  \n`,
        );
}

function toAlertServiceOpenCallExpression(node?: Node): CallExpression | undefined {
    return node?.getFirstAncestor(
        (x): x is CallExpression =>
            x.isKind(SyntaxKind.CallExpression) && x.getFullText().includes('.open'),
    );
}

function findOptionsInitializer(
    ref: PropertyAccessExpression,
): ObjectLiteralExpression | undefined {
    return ref
        ?.getFirstChildByKind(SyntaxKind.Identifier)
        ?.findReferencesAsNodes()
        .map((n) =>
            n
                .getFirstAncestorByKind(SyntaxKind.PropertyDeclaration)
                ?.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression),
        )
        .find(Boolean);
}
