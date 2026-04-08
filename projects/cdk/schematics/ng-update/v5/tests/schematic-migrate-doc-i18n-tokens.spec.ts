import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrateDocI18nTokens', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'wraps plain string useValue with signal() for TUI_DOC_SOURCE_CODE_TEXT',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_SOURCE_CODE_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SOURCE_CODE_TEXT, useValue: 'GitHub'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps plain string useValue with signal() for TUI_DOC_MENU_TEXT',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_MENU_TEXT, useValue: 'Navigation'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps plain string useValue with signal() for TUI_DOC_SEARCH_TEXT',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_SEARCH_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SEARCH_TEXT, useValue: 'Find...'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps plain string useValue with signal() for TUI_DOC_SEE_ALSO_TEXT',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_SEE_ALSO_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SEE_ALSO_TEXT, useValue: 'Related'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps plain string useValue with signal() for TUI_DOC_TOC_TEXT',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_TOC_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_TOC_TEXT, useValue: 'Contents'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps array useValue with signal() for TUI_DOC_DEMO_TEXTS',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_DEMO_TEXTS} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_DEMO_TEXTS, useValue: ['Night', 'BG', 'Val']},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'wraps plain string useValue with signal() for TUI_DOC_PREVIEW_TEXT',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_PREVIEW_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_PREVIEW_TEXT, useValue: 'Preview'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds signal import from @angular/core when not present',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_SOURCE_CODE_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SOURCE_CODE_TEXT, useValue: 'GitHub'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'does not add duplicate signal import when signal is already imported',
        migrate({
            component: `
                import {Component, signal} from '@angular/core';
                import {TUI_DOC_SOURCE_CODE_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SOURCE_CODE_TEXT, useValue: 'GitHub'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'does not re-wrap useValue already wrapped in signal()',
        migrate({
            component: `
                import {Component, signal} from '@angular/core';
                import {TUI_DOC_SOURCE_CODE_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SOURCE_CODE_TEXT, useValue: signal('GitHub')},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'does not touch useFactory providers for doc tokens',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_DOC_SOURCE_CODE_TEXT} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_DOC_SOURCE_CODE_TEXT, useFactory: () => 'GitHub'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'does not touch non-doc tokens',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_SOMETHING_ELSE} from '@taiga-ui/addon-doc';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_SOMETHING_ELSE, useValue: 'value'},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
