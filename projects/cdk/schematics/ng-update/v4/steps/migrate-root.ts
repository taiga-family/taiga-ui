import type {DevkitFileSystem} from 'ng-morph';
import {
    addProviderToNgModule,
    getActiveProject,
    getNgModules,
    getPackageJsonDependency,
    infoLog,
    Node,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
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
            addProviders({callExpression, fileSystem});
        }
    } else {
        ref.replaceWithText('TuiRoot');
        addProviders({fileSystem, modulePath: ref.getSourceFile().getFilePath()});
    }
}

function addProviders({
    callExpression,
    fileSystem,
    modulePath,
}: {
    callExpression?: Node;
    fileSystem: DevkitFileSystem;
    modulePath?: string;
}): void {
    const providersArray = callExpression?.getParentWhile(Node.isArrayLiteralExpression);
    const module = modulePath && getNgModules(modulePath)?.[0];

    if (!providersArray && !modulePath) {
        return;
    }

    const path = providersArray
        ? providersArray.getSourceFile().getFilePath()
        : modulePath || '';

    if (providersArray) {
        providersArray.addElement('NG_EVENT_PLUGINS');
    } else if (module) {
        addProviderToNgModule(module, 'NG_EVENT_PLUGINS', {unique: true});
    }

    if (providersArray || module) {
        addUniqueImport(path, 'NG_EVENT_PLUGINS', '@taiga-ui/event-plugins');
    }

    getActiveProject();
    const proprietary =
        getPackageJsonDependency(fileSystem.tree, '@taiga-ui/proprietary-core') ||
        getPackageJsonDependency(fileSystem.tree, '@taiga-ui/proprietary');

    if (proprietary) {
        if (providersArray) {
            providersArray.addElement('TBANK_PROVIDERS');
        } else if (module) {
            addProviderToNgModule(module, 'TBANK_PROVIDERS', {unique: true});
        }

        if (providersArray || module) {
            addUniqueImport(path, 'TBANK_PROVIDERS', '@taiga-ui/proprietary');
        }
    }
}
