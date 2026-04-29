import {join} from 'node:path';

import {TUI_VERSION} from '@taiga-ui/cdk';
import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';
import {
    MASKITO_VERSION,
    NG_WEB_APIS,
    TUI_DOMPURIFY_VERSION,
    TUI_EVENT_PLUGINS_VERSION,
    TUI_POLYMORPHEUS_VERSION,
} from '../steps/update-packages';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update migrate packages', () => {
    it(
        'update packages from v4',
        migrate({
            packageJson: `
             {
                 "dependencies": {
                    "@angular/core": "~19.0.0",
                    "@maskito/angular": "3.11.1",
                    "@maskito/core": "3.11.1",
                    "@maskito/kit": "3.11.1",
                    "@ng-web-apis/common": "4.0.0",
                    "@ng-web-apis/intersection-observer": "4.0.0",
                    "@ng-web-apis/mutation-observer": "4.0.0",
                    "@ng-web-apis/screen-orientation": "4.0.0",
                    "@ng-web-apis/resize-observer": "4.0.0",
                    "@ng-web-apis/universal": "4.0.0",
                    "@taiga-ui/cdk": "${TUI_VERSION}",
                    "@taiga-ui/core": "${TUI_VERSION}",
                    "@taiga-ui/icons": "${TUI_VERSION}",
                    "@taiga-ui/dompurify": "4.0.0",
                    "@taiga-ui/event-plugins": "4.0.0",
                    "@taiga-ui/i18n": "${TUI_VERSION}",
                    "@taiga-ui/addon-table": "${TUI_VERSION}",
                    "@taiga-ui/addon-mobile": "${TUI_VERSION}",
                    "@taiga-ui/polymorpheus": "4.0.0",
                    "@taiga-ui/proprietary": "${TUI_VERSION}"
                 }
             }
            `,
        }),
    );

    it(
        'update packages from v5 to v5',
        migrate({
            packageJson: `
             {
                 "dependencies": {
                    "@angular/core": "~19.0.0",
                    "@maskito/angular": "${MASKITO_VERSION}",
                    "@maskito/core": "${MASKITO_VERSION}",
                    "@maskito/kit": "${MASKITO_VERSION}",
                    "@ng-web-apis/common": "${NG_WEB_APIS}",
                    "@ng-web-apis/intersection-observer": "${NG_WEB_APIS}",
                    "@ng-web-apis/mutation-observer": "${NG_WEB_APIS}",
                    "@ng-web-apis/universal": "${NG_WEB_APIS}",
                    "@taiga-ui/cdk": "${TUI_VERSION}",
                    "@taiga-ui/core": "${TUI_VERSION}",
                    "@taiga-ui/icons": "${TUI_VERSION}",
                    "@taiga-ui/dompurify": "${TUI_DOMPURIFY_VERSION}",
                    "@taiga-ui/i18n": "${TUI_VERSION}",
                    "@taiga-ui/event-plugins": "${TUI_EVENT_PLUGINS_VERSION}",
                    "@taiga-ui/addon-table": "${TUI_VERSION}",
                    "@taiga-ui/addon-mobile": "${TUI_VERSION}",
                    "@taiga-ui/polymorpheus": "${TUI_POLYMORPHEUS_VERSION}",
                    "@taiga-ui/proprietary": "${TUI_VERSION}"
                 }
             }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
