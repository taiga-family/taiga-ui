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
                    TUI_AVATAR_DEFAULT_OPTIONS,
                    TUI_INPUT_MONTH_DEFAULT_OPTIONS,
                    TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
                    TUI_MOBILE_CALENDAR,
                    TUI_MOBILE_CALENDAR_PROVIDER,
                    TUI_PUSH_DEFAULT_OPTIONS,
                    TUI_RADIO_DEFAULT_OPTIONS,
                    TUI_SLIDER_DEFAULT_OPTIONS,
                    TUI_SWITCH_DEFAULT_OPTIONS,
                    TUI_TOAST_DEFAULT_OPTIONS,
                } from '@taiga-ui/kit';
                import {
                    TUI_LINK_DEFAULT_OPTIONS,
                    TuiExpandContent,
                    TuiMonthPipe,
                } from '@taiga-ui/core';
                import {AbstractTuiMultipleControl} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiExpandContent, TuiMonthPipe],
                })
                export class TestComponent extends AbstractTuiMultipleControl<string> {
                    protected readonly options = [
                        TUI_RADIO_DEFAULT_OPTIONS,
                        TUI_TOAST_DEFAULT_OPTIONS,
                        TUI_AVATAR_DEFAULT_OPTIONS,
                        TUI_SWITCH_DEFAULT_OPTIONS,
                        TUI_PUSH_DEFAULT_OPTIONS,
                        TUI_INPUT_MONTH_DEFAULT_OPTIONS,
                        TUI_INPUT_PASSWORD_DEFAULT_OPTIONS,
                        TUI_SLIDER_DEFAULT_OPTIONS,
                        TUI_LINK_DEFAULT_OPTIONS,
                        TUI_MOBILE_CALENDAR,
                        TUI_MOBILE_CALENDAR_PROVIDER,
                    ];
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
