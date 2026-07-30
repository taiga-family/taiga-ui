import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update misc removed tokens and helpers warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames deprecated-alias tokens/helpers and adds TODO comments for the rest',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_ICON_START_RESOLVER,
                    TUI_ICON_STARTS,
                    TUI_SPIN_ICONS,
                    TuiDarkThemeService,
                } from '@taiga-ui/core';
                import {
                    TUI_IS_TOUCH,
                    tuiIsKeyboardFocusable,
                    tuiIsMouseFocusable,
                } from '@taiga-ui/cdk';
                import {tuiToggleDay} from '@taiga-ui/kit';

                @Component({})
                export class TestComponent {
                    protected readonly registry = inject(TUI_ICON_STARTS);
                    protected readonly resolver = inject(TUI_ICON_START_RESOLVER);
                    protected readonly spinIcons = inject(TUI_SPIN_ICONS);
                    protected readonly darkTheme = inject(TuiDarkThemeService);
                    protected readonly touch = inject(TUI_IS_TOUCH);
                    protected readonly keyboard = tuiIsKeyboardFocusable;
                    protected readonly mouse = tuiIsMouseFocusable;
                    protected readonly toggle = tuiToggleDay;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
