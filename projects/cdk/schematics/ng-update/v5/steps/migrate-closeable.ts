import {type Tree} from '@angular-devkit/schematics';
import {
    getSourceFiles,
    Node,
    type ObjectLiteralExpression,
    type SourceFile,
    SyntaxKind,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {isServiceMethodCall} from '../../../utils/is-service-method-call';

const FACTORY_NAME = 'tuiDialog';

const SERVICE_NAMES = [
    'TuiDialogService',
    'TuiAlertService',
    'TuiNotificationService',
    'TuiSheetDialogService',
];

const METHOD_NAME = 'open';

const OPTION_TYPE_NAMES = [
    'TuiDialogOptions',
    'TuiSheetDialogOptions',
    'TuiAlertOptions',
    'TuiNotificationOptions',
];

export function migrateCloseable(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        migrateSourceFile(sourceFile);
    });
}

function migrateSourceFile(sourceFile: SourceFile): void {
    migrateOpenOptions(sourceFile);
    migrateTypedDeclarations(sourceFile);
}

function migrateOpenOptions(sourceFile: SourceFile): void {
    const calls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);

    calls.forEach((call) => {
        SERVICE_NAMES.forEach((serviceName) => {
            if (
                call.getExpression().getText() !== FACTORY_NAME &&
                !isServiceMethodCall(call, serviceName, METHOD_NAME)
            ) {
                return;
            }

            const [, options] = call.getArguments();

            if (!options || !Node.isObjectLiteralExpression(options)) {
                return;
            }

            renameCloseableKey(options);
        });
    });
}

// An options object may be declared apart from the open()/provider call and passed by reference.
// Rename it only when the declaration is explicitly typed as one of the dialog option types,
// so plain objects that merely have a `closeable` key are left untouched.
function migrateTypedDeclarations(sourceFile: SourceFile): void {
    const declarations = [
        ...sourceFile.getDescendantsOfKind(SyntaxKind.PropertyDeclaration),
        ...sourceFile.getDescendantsOfKind(SyntaxKind.VariableDeclaration),
    ];

    declarations.forEach((declaration) => {
        const typeNode = declaration.getTypeNode();
        const initializer = declaration.getInitializer();

        if (
            !typeNode ||
            !initializer ||
            !Node.isObjectLiteralExpression(initializer) ||
            !referencesOptionType(typeNode.getText())
        ) {
            return;
        }

        renameCloseableKey(initializer);
    });
}

function referencesOptionType(typeText: string): boolean {
    return OPTION_TYPE_NAMES.some((name) =>
        new RegExp(String.raw`\b${name}\b`).test(typeText),
    );
}

function renameCloseableKey(obj: ObjectLiteralExpression): void {
    obj.getProperties().forEach((prop) => {
        if (Node.isPropertyAssignment(prop)) {
            const nameNode = prop.getNameNode();

            if (Node.isIdentifier(nameNode) && nameNode.getText() === 'closeable') {
                prop.rename('closable');

                return;
            }

            if (
                Node.isStringLiteral(nameNode) &&
                nameNode.getLiteralText() === 'closeable'
            ) {
                const quote = nameNode.getQuoteKind();

                nameNode.replaceWithText(`${quote}closable${quote}`);
            }

            return;
        }

        if (Node.isShorthandPropertyAssignment(prop)) {
            const name = prop.getName();

            if (name === 'closeable') {
                prop.replaceWithText('closable: closeable');
            }
        }
    });
}
