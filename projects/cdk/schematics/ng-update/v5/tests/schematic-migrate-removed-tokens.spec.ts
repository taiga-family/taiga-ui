import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrateRemovedTokens', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates TUI_TEXTFIELD_HOST usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_TEXTFIELD_HOST} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_TEXTFIELD_HOST, useValue: 'host'}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates TUI_MONTH_FORMATTER usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_MONTH_FORMATTER, useValue: 'formatter'}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates TUI_FONTS_READY usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_FONTS_READY} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_FONTS_READY, useValue: 'fonts'}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates TUI_TOUCH_SUPPORTED usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_TOUCH_SUPPORTED} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_TOUCH_SUPPORTED, useValue: true}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates TUI_IS_CHROMIUM usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_IS_CHROMIUM} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_IS_CHROMIUM, useValue: false}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates TUI_IS_STACKBLITZ usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_IS_STACKBLITZ} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    providers: [{provide: TUI_IS_STACKBLITZ, useValue: false}],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'handles multiple removed tokens in one file',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_TEXTFIELD_HOST, TUI_FONTS_READY} from '@taiga-ui/core';
                import {TUI_IS_CHROMIUM} from '@taiga-ui/cdk';

                @Component({
                    standalone: true,
                    providers: [
                        {provide: TUI_TEXTFIELD_HOST, useValue: 'host'},
                        {provide: TUI_FONTS_READY, useValue: 'fonts'},
                        {provide: TUI_IS_CHROMIUM, useValue: false},
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
