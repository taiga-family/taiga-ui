import {type DevkitFileSystem} from 'ng-morph';

import {replacePackageName} from '../../steps';

export const TUI_POLYMORPHEUS_VERSION = '^5.0.0';
export const TUI_DOMPURIFY_VERSION = '^5.0.0';
export const TUI_EVENT_PLUGINS_VERSION = '^5.0.0';
export const NG_WEB_APIS = '^5.0.0';
export const MASKITO_VERSION = '^5.0.0';

export function updatePackages({tree}: DevkitFileSystem): void {
    const packages = (
        [
            [TUI_POLYMORPHEUS_VERSION, ['@taiga-ui/polymorpheus']],
            [TUI_EVENT_PLUGINS_VERSION, ['@taiga-ui/event-plugins']],
            [MASKITO_VERSION, ['@maskito/core', '@maskito/angular', '@maskito/kit']],
            [
                NG_WEB_APIS,
                [
                    '@ng-web-apis/mutation-observer',
                    '@ng-web-apis/resize-observer',
                    '@ng-web-apis/screen-orientation',
                    '@ng-web-apis/common',
                    '@ng-web-apis/intersection-observer',
                    '@ng-web-apis/universal',
                ],
            ],
            [TUI_DOMPURIFY_VERSION, ['@taiga-ui/dompurify']],
        ] satisfies ReadonlyArray<readonly [string, readonly string[]]>
    ).flatMap(([version, names]) => names.map((name) => ({name, version})));

    for (const {name, version} of packages) {
        replacePackageName(name, {name, version}, tree);
    }
}
