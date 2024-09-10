/// <reference lib="es2021" />
import {type DevkitFileSystem, getPackageJsonDependency} from 'ng-morph';
import {getSourceFiles, saveActiveProject} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants/file-globs';
import type {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {replaceIdentifiers} from '../../steps/replace-identifier';
import {replacePackageName} from '../../steps/replace-package-name';

export const TUI_EDITOR_VERSION = '^4.0.0';

export function migrateEditor(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    const moduleSpecifier = ['@tinkoff/tui-editor', '@taiga-ui/addon-editor'];
    const hasEditor = moduleSpecifier.every(
        (pkg) => !getPackageJsonDependency(fileSystem.tree, pkg),
    );

    if (hasEditor) {
        return;
    }

    if (!options['skip-logs']) {
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating editor...`);
    }

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
                {
                    name: 'TUI_EDITOR_DEFAULT_TOOLS',
                    moduleSpecifier: '@tinkoff/tui-editor',
                },
            ],
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

    if (!options['skip-logs']) {
        titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    }
}
