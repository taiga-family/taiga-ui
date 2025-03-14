/// <reference lib="es2021" />
import type {DevkitFileSystem} from 'ng-morph';
import {
    addProviderToComponent,
    addProviderToNgModule,
    FINISH_SYMBOL,
    getNgComponents,
    getNgModules,
    getPackageJsonDependency,
    getSourceFiles,
    infoLog,
    Node,
    REPLACE_SYMBOL,
    saveActiveProject,
    SMALL_TAB_SYMBOL,
    titleLog,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants/file-globs';
import type {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {replaceIdentifiers} from '../../steps/replace-identifier';
import {replacePackageName} from '../../steps/replace-package-name';

export const TUI_EDITOR_VERSION = '^4.21.0';

export function migrateEditor(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    const moduleSpecifier = ['@tinkoff/tui-editor', '@taiga-ui/addon-editor'];
    const hasEditor = moduleSpecifier.every(
        (pkg) => !getPackageJsonDependency(fileSystem.tree, pkg),
    );

    if (hasEditor) {
        return;
    }

    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating editor...`);

    addProprietaryProviders(fileSystem);

    replaceIdentifiers(options, [
        {
            from: {name: 'TuiEditorModule', moduleSpecifier},
            to: [
                {name: 'TuiEditor', moduleSpecifier: '@taiga-ui/editor'},
                {name: 'TuiEditorSocket', moduleSpecifier: '@taiga-ui/editor'},
            ],
        },
        {
            from: {name: 'TuiEditorSocketModule', moduleSpecifier},
            to: {name: 'TuiEditorSocket', moduleSpecifier: '@taiga-ui/editor'},
        },
        {
            from: {name: 'TuiToolbarModule', moduleSpecifier},
            to: {name: 'TuiToolbar', moduleSpecifier: '@taiga-ui/editor'},
        },
        {
            from: {name: 'defaultEditorExtensions', moduleSpecifier},
            to: {
                name: 'TUI_EDITOR_DEFAULT_EXTENSIONS',
                moduleSpecifier: '@taiga-ui/editor',
            },
        },
        {
            from: {name: 'TUI_EDITOR_DEFAULT_EXTENSIONS', moduleSpecifier},
            to: {
                name: 'TUI_EDITOR_DEFAULT_EXTENSIONS',
                moduleSpecifier: '@taiga-ui/editor',
            },
        },
        {
            from: [
                {name: 'defaultEditorTools', moduleSpecifier},
                {name: 'TUI_EDITOR_DEFAULT_TOOLS', moduleSpecifier},
            ],
            to: {name: 'TUI_EDITOR_DEFAULT_TOOLS', moduleSpecifier: '@taiga-ui/editor'},
        },
        {
            from: {name: 'TUI_EDITOR_DEFAULT_EDITOR_TOOLS', moduleSpecifier},
            to: {name: 'TUI_EDITOR_DEFAULT_TOOLS', moduleSpecifier: '@taiga-ui/editor'},
        },
        {
            from: {name: 'TuiColorPickerModule', moduleSpecifier},
            to: {name: 'TuiColorPickerModule', moduleSpecifier: '@taiga-ui/legacy'},
        },
        {
            from: {name: 'TuiInputColorModule', moduleSpecifier},
            to: {name: 'TuiInputColorModule', moduleSpecifier: '@taiga-ui/legacy'},
        },
    ]);

    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) =>
        sourceFile.replaceWithText(
            sourceFile
                .getFullText()
                .replaceAll(
                    /import\(['"`](@tinkoff|@taiga-ui)\/(tui-editor|addon-editor)\/(.*)['"`]\)/g,
                    "import('@taiga-ui/editor')",
                ),
        ),
    );

    saveActiveProject();

    moduleSpecifier.forEach((pkg) =>
        replacePackageName(
            pkg,
            {name: '@taiga-ui/editor', version: TUI_EDITOR_VERSION},
            fileSystem.tree,
        ),
    );

    saveActiveProject();

    !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}

function addProprietaryProviders(fileSystem: DevkitFileSystem): void {
    const proprietary =
        getPackageJsonDependency(fileSystem.tree, '@taiga-ui/proprietary-core') ||
        getPackageJsonDependency(fileSystem.tree, '@taiga-ui/proprietary');

    if (!proprietary) {
        return;
    }

    const refs = [
        ...getNamedImportReferences('TuiEditorModule', '@tinkoff/tui-editor'),
        ...getNamedImportReferences('TuiEditorModule', '@taiga-ui/addon-editor'),
    ];

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();
        const filePath = parent?.getSourceFile().getFilePath() ?? '';

        if (Node.isImportSpecifier(parent)) {
            addUniqueImport(filePath, 'tuiEditorOptionsProvider', '@taiga-ui/editor');
            addUniqueImport(
                filePath,
                'TUI_PROPRIETARY_EDITOR_ICONS',
                '@taiga-ui/proprietary',
            );
        } else if (Node.isArrayLiteralExpression(parent)) {
            const [componentClass] = getNgComponents(filePath);
            const [moduleClass] = getNgModules(filePath);
            const provider =
                'tuiEditorOptionsProvider({icons: TUI_PROPRIETARY_EDITOR_ICONS})';

            if (componentClass) {
                addProviderToComponent(componentClass, provider);
            }

            if (moduleClass) {
                addProviderToNgModule(moduleClass, provider);
            }
        }
    }
}
