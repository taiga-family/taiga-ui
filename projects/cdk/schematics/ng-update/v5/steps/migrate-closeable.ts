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

export function migrateCloseable(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        migrateSourceFile(sourceFile);
    });
}

function migrateSourceFile(sourceFile: SourceFile): void {
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
