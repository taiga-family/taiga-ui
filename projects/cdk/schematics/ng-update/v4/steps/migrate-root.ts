import {
    type DevkitFileSystem,
    getActiveProject,
    getPackageJsonDependency,
    Node,
} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {infoLog, REPLACE_SYMBOL, SMALL_TAB_SYMBOL} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

export function migrateRoot(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} updating TuiRoot`);

    const refs = [
        ...getNamedImportReferences('TuiRootModule', '@taiga-ui/core'),
        ...getNamedImportReferences(
            'TuiProprietaryRootModule',
            '@taiga-ui/proprietary-core',
        ),
        ...getNamedImportReferences(
            'TuiProprietaryRoot2023Module',
            '@taiga-ui/proprietary-core',
        ),
    ];

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addUniqueImport(
                parent.getSourceFile().getFilePath(),
                'TuiRoot',
                '@taiga-ui/core',
            );
        } else {
            replaceRootIdentifier(ref, fileSystem);
        }
    }
}

function replaceRootIdentifier(ref: Node, fileSystem: DevkitFileSystem): void {
    const callExpression = ref.getParentWhile(Node.isCallExpression);

    if (
        callExpression &&
        callExpression.getExpression().getText() === 'importProvidersFrom'
    ) {
        const node = callExpression
            .getArguments()
            .find((arg) => arg.getText() === ref.getText());

        if (node) {
            callExpression.removeArgument(node);
            addProviders(callExpression, fileSystem);
        }
    } else {
        ref.replaceWithText('TuiRoot');
    }
}

function addProviders(callExpression: Node, fileSystem: DevkitFileSystem): void {
    const array = callExpression.getParentWhile(Node.isArrayLiteralExpression);

    if (!array) {
        return;
    }

    array.addElement('NG_EVENT_PLUGINS');
    addUniqueImport(
        array.getSourceFile().getFilePath(),
        'NG_EVENT_PLUGINS',
        '@taiga-ui/event-plugins',
    );

    getActiveProject();
    const proprietary = getPackageJsonDependency(
        fileSystem.tree,
        '@taiga-ui/proprietary-core',
    );

    if (proprietary) {
        array.addElement('TBANK_PROVIDERS');

        addUniqueImport(
            array.getSourceFile().getFilePath(),
            'TBANK_PROVIDERS',
            '@taiga-ui/proprietary',
        );
    }
}
