/// <reference lib="es2021" />
import {type DevkitFileSystem} from 'ng-morph';

import {replaceInPackageJson} from '../../steps';

export const TUI_POLYMORPHEUS_VERSION = '^5.0.0';
export const TUI_DOMPURIFY_VERSION = '^5.0.0';
export const TUI_EVENT_PLUGINS_VERSION = '^5.0.0';
export const NG_WEB_APIS = '^5.0.0';
export const MASKITO_VERSION = '^5.0.0';

export function updatePackages({tree}: DevkitFileSystem): void {
    replaceInPackageJson(
        '@taiga-ui/polymorpheus',
        {
            name: '@taiga-ui/polymorpheus',
            version: TUI_POLYMORPHEUS_VERSION,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@taiga-ui/event-plugins',
        {
            name: '@taiga-ui/event-plugins',
            version: TUI_EVENT_PLUGINS_VERSION,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@maskito/core',
        {
            name: '@maskito/core',
            version: MASKITO_VERSION,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@maskito/angular',
        {
            name: '@maskito/angular',
            version: MASKITO_VERSION,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@maskito/kit',
        {
            name: '@maskito/kit',
            version: MASKITO_VERSION,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@ng-web-apis/common',
        {
            name: '@ng-web-apis/common',
            version: NG_WEB_APIS,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@ng-web-apis/intersection-observer',
        {
            name: '@ng-web-apis/intersection-observer',
            version: NG_WEB_APIS,
        },
        tree,
        true,
    );
    replaceInPackageJson(
        '@ng-web-apis/mutation-observer',
        {
            name: '@ng-web-apis/mutation-observer',
            version: NG_WEB_APIS,
        },
        tree,
        true,
    );
}
