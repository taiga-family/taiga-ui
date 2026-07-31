import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update date/time value-transformer tokens warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for the removed date/time value-transformer tokens',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_DATE_RANGE_VALUE_TRANSFORMER,
                    TUI_DATE_TIME_VALUE_TRANSFORMER,
                    TUI_DATE_VALUE_TRANSFORMER,
                    TUI_TIME_VALUE_TRANSFORMER,
                } from '@taiga-ui/kit';

                @Component({})
                export class TestComponent {
                    protected readonly date = inject(TUI_DATE_VALUE_TRANSFORMER);
                    protected readonly dateRange = inject(
                        TUI_DATE_RANGE_VALUE_TRANSFORMER,
                    );
                    protected readonly dateTime = inject(TUI_DATE_TIME_VALUE_TRANSFORMER);
                    protected readonly time = inject(TUI_TIME_VALUE_TRANSFORMER);
                }
            `,
        }),
    );

    it(
        'adds a TODO comment for the removed TUI_DATE_ADAPTER lookup',
        migrate({
            component: /* TypeScript */ `
                import {TUI_DATE_ADAPTER} from '@taiga-ui/kit';

                export const maskitoMode = TUI_DATE_ADAPTER['DMY'];
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
