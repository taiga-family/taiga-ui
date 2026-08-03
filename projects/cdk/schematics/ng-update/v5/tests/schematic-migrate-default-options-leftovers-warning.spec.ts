import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed default-options and leftover symbols warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for removed default-options tokens and leftover symbols',
        migrate({
            component: /* TypeScript */ `
                import {
                    TUI_MOBILE_CALENDAR,
                    TUI_MOBILE_CALENDAR_PROVIDER,
                } from '@taiga-ui/kit';
                import {TuiExpandContent, TuiMonthPipe} from '@taiga-ui/core';
                import {AbstractTuiMultipleControl} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiExpandContent, TuiMonthPipe],
                })
                export class TestComponent extends AbstractTuiMultipleControl<string> {
                    protected readonly options = [
                        TUI_MOBILE_CALENDAR,
                        TUI_MOBILE_CALENDAR_PROVIDER,
                    ];
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
