/// <reference lib="es2021" />
import type {DevkitFileSystem} from 'ng-morph';
import {
    addPackageJsonDependency,
    errorLog,
    getImports,
    getPackageJsonDependency,
    removePackageJsonDependency,
} from 'ng-morph';

import {TUI_VERSION} from '../../../../constants/version';
import {ALL_TS_FILES} from '../../../constants';
import {replacePackageName} from '../../steps';

export const TUI_POLYMORPHEUS_VERSION = '^4.7.3';
export const TUI_DOMPURIFY_VERSION = '^4.1.7';
export const TUI_EVENT_PLUGINS_VERSION = '^4.2.3';

export function updatePackages({tree}: DevkitFileSystem): void {
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

    const cdk = getPackageJsonDependency(tree, '@taiga-ui/cdk');

    if (!getPackageJsonDependency(tree, '@taiga-ui/event-plugins')) {
        addPackageJsonDependency(tree, {
            name: '@taiga-ui/event-plugins',
            version: TUI_EVENT_PLUGINS_VERSION,
            type: cdk?.type,
        });
    }

    try {
        ['@taiga-ui/layout', '@taiga-ui/legacy'].forEach((moduleSpecifier) => {
            if (getImports(ALL_TS_FILES, {moduleSpecifier}).length) {
                addPackageJsonDependency(tree, {
                    name: moduleSpecifier,
                    version: TUI_VERSION,
                    type: cdk?.type,
                });
            }
        });
    } catch (e) {
        const error = e as Error;

        errorLog(
            `ATTENTION: An error occurred during migration: ${error.message}\n${error.stack}`,
        );
    }
}
