import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed config tokens and services warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for removed config tokens and services',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_DAY_TYPE_HANDLER,
                    TUI_EXPAND_LOADED,
                    TUI_FIRST_DAY_OF_WEEK,
                    TuiFormatDateService,
                } from '@taiga-ui/core';
                import {TUI_NUMBER_VALUE_TRANSFORMER} from '@taiga-ui/legacy';

                @Component({})
                export class TestComponent {
                    protected readonly firstDay = inject(TUI_FIRST_DAY_OF_WEEK);
                    protected readonly dayType = inject(TUI_DAY_TYPE_HANDLER);
                    protected readonly loaded = TUI_EXPAND_LOADED;
                    protected readonly formatDate = inject(TuiFormatDateService);
                    protected readonly transformer = inject(TUI_NUMBER_VALUE_TRANSFORMER);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
