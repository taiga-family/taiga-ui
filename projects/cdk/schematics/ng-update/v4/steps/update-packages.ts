/// <reference lib="es2021" />
import type {DevkitFileSystem} from 'ng-morph';
import {
    addPackageJsonDependency,
    getImports,
    getPackageJsonDependency,
    removePackageJsonDependency,
} from 'ng-morph';

import {TUI_VERSION} from '../../../../constants/version';
import {ALL_TS_FILES} from '../../../constants';
import type {TuiSchema} from '../../../ng-add/schema';
import {replacePackageName} from '../../steps';

export const TUI_POLYMORPHEUS_VERSION = '^4.6.4';
export const TUI_DOMPURIFY_VERSION = '^4.1.2';
export const TUI_EVENT_PLUGINS_VERSION = '^4.0.1';
export const TUI_EDITOR_VERSION = '^2.5.0';

export function updatePackages({tree}: DevkitFileSystem, _: TuiSchema): void {
    const packagesToRemove = ['@taiga-ui/addon-tablebars', '@taiga-ui/addon-preview'];

    packagesToRemove.forEach((pkg) => {
        removePackageJsonDependency(tree, pkg);
    });

    replacePackageName(
        '@tinkoff/ng-polymorpheus',
        {
            name: '@taiga-ui/polymorpheus',
            version: TUI_POLYMORPHEUS_VERSION,
        },
        tree,
    );
    replacePackageName(
        '@tinkoff/ng-dompurify',
        {
            name: '@taiga-ui/dompurify',
            version: TUI_DOMPURIFY_VERSION,
        },
        tree,
    );
    replacePackageName(
        '@tinkoff/ng-event-plugins',
        {
            name: '@taiga-ui/event-plugins',
            version: TUI_EVENT_PLUGINS_VERSION,
        },
        tree,
    );
    replacePackageName(
        '@tinkoff/tui-editor',
        {
            name: '@taiga-ui/editor',
            version: TUI_EDITOR_VERSION,
        },
        tree,
    );

    const cdk = getPackageJsonDependency(tree, '@taiga-ui/cdk');

    if (!getPackageJsonDependency(tree, '@taiga-ui/event-plugins')) {
        addPackageJsonDependency(tree, {
            name: '@taiga-ui/event-plugins',
            version: TUI_EVENT_PLUGINS_VERSION,
            type: cdk?.type,
        });
    }

    if (getImports(ALL_TS_FILES, {moduleSpecifier: '@taiga-ui/layout'}).length) {
        addPackageJsonDependency(tree, {
            name: '@taiga-ui/layout',
            version: TUI_VERSION,
            type: cdk?.type,
        });
    }

    if (getImports(ALL_TS_FILES, {moduleSpecifier: '@taiga-ui/legacy'}).length) {
        addPackageJsonDependency(tree, {
            name: '@taiga-ui/legacy',
            version: TUI_VERSION,
            type: cdk?.type,
        });
    }
}
