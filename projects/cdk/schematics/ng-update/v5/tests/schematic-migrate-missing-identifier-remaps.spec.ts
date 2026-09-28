import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update missing identifier renames and package remaps', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames leftover v5 identifiers and remaps their packages',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_TOASTS_CONCURRENCY,
                    TuiButtonCopyComponent,
                } from '@taiga-ui/kit';
                import {TuiCellOptions, TuiCellStretch} from '@taiga-ui/layout';
                import {type TuiDialogSize} from '@taiga-ui/core';

                @Component({
                    imports: [TuiButtonCopyComponent, TuiCellStretch],
                })
                export class TestComponent {
                    protected readonly concurrency = inject(TUI_TOASTS_CONCURRENCY);
                    protected readonly options: TuiCellOptions | null = null;
                    protected readonly size: TuiDialogSize = 'm';
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
