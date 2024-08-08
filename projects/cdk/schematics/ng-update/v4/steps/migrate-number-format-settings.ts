import {Node, SyntaxKind} from 'ng-morph';
import type {ObjectLiteralElementLike} from 'ts-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';

const OPTIONS_MIGRATIONS: Record<
    string,
    (property: ObjectLiteralElementLike) => unknown
> = {
    decimalLimit: (property) =>
        property.replaceWithText(property.getText().replace('decimalLimit', 'precision')),
    decimal: (property) => {
        const [, propertyValue] = property.getText().split(/\s?:\s?/);

        property.replaceWithText(
            propertyValue.match(/^['"`]never['"`]$/)
                ? 'precision: 0'
                : property.getText().replace('decimal', 'decimalMode'),
        );
    },
    zeroPadding: (property) => {
        const [, propertyValue] = property.getText().split(/\s?:\s?/);

        if (propertyValue === 'true') {
            property.replaceWithText('decimalMode: "always"');
        } else {
            property.replaceWithText(
                `// TODO: (Taiga UI migration) "zeroPadding" is deleted. Use "decimalMode" instead https://taiga-ui.dev/pipes/format-number/API \n${property.getText()}`,
            );
        }
    },
};

export function migrateNumberFormatSettings(options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating TuiNumberFormatSettings...`,
        );

    const asFunctionArgument = [
        ...getNamedImportReferences('tuiFormatNumber', '@taiga-ui/core'),
        ...getNamedImportReferences('tuiNumberFormatProvider', '@taiga-ui/core'),
    ].map((n) =>
        n
            .getFirstAncestorByKind(SyntaxKind.CallExpression)
            ?.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression),
    );

    const asStandaloneSettingsObject = getNamedImportReferences(
        'TuiNumberFormatSettings',
        '@taiga-ui/core',
    ).map((n) => {
        const type = n.getFirstAncestorByKind(SyntaxKind.TypeReference);
        const siblings = [
            ...(type?.getPreviousSiblings() || []),
            ...(type?.getNextSiblings() || []),
        ];

        return siblings.find(Node.isObjectLiteralExpression);
    });

    [...asFunctionArgument, ...asStandaloneSettingsObject]
        .filter(Node.isObjectLiteralExpression)
        .forEach((options) => {
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
            `${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} migration of TuiNumberFormatSettings completes \n`,
        );
}
