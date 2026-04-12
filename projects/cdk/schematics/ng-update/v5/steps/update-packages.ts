import {type DevkitFileSystem} from 'ng-morph';

import {replaceInPackageJson} from '../../steps';

export const TUI_POLYMORPHEUS_VERSION = '^5.0.0';
export const TUI_DOMPURIFY_VERSION = '^5.0.0';
export const TUI_EVENT_PLUGINS_VERSION = '^5.0.0';
export const NG_WEB_APIS = '^5.0.0';
export const MASKITO_VERSION = '^5.0.0';

export function updatePackages({tree}: DevkitFileSystem): void {
    for (const {name, remove, versionTo} of [
        {name: '@taiga-ui/polymorpheus', remove: true},
        {name: '@taiga-ui/event-plugins', remove: true},
        {name: '@maskito/core', remove: true},
        {name: '@maskito/angular', remove: true},
        {name: '@maskito/kit', remove: true},
        {name: '@ng-web-apis/mutation-observer', remove: true},
        {name: '@ng-web-apis/resize-observer', remove: true},
        {name: '@ng-web-apis/screen-orientation', remove: true},
        {name: '@ng-web-apis/common', remove: true},
        {name: '@ng-web-apis/intersection-observer', remove: true},
        {name: '@taiga-ui/dompurify', remove: false, versionTo: TUI_DOMPURIFY_VERSION},
        {name: '@ng-web-apis/universal', remove: false, versionTo: NG_WEB_APIS},
    ]) {
        replaceInPackageJson({tree, name, remove, versionTo});
    }
}
