import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update move mobile-dialog to legacy', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'remaps the mobile-dialog symbols from addon-mobile to legacy',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_MOBILE_DIALOG_DEFAULT_OPTIONS,
                    TUI_MOBILE_DIALOG_OPTIONS,
                    TuiMobileDialog,
                    TuiMobileDialogOptions,
                    TuiMobileDialogService,
                    tuiMobileDialogOptionsProvider,
                } from '@taiga-ui/addon-mobile';

                @Component({
                    imports: [TuiMobileDialog],
                    providers: [tuiMobileDialogOptionsProvider({})],
                })
                export class TestComponent {
                    protected readonly service = inject(TuiMobileDialogService);
                    protected readonly options = inject(TUI_MOBILE_DIALOG_OPTIONS);
                    protected readonly defaults: TuiMobileDialogOptions =
                        TUI_MOBILE_DIALOG_DEFAULT_OPTIONS;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
