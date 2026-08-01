import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update more identifier remaps and renames', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'remaps sibling-leftover identifiers and renames alert/expand symbols',
        migrate({
            component: /* TypeScript */ `
                import {
                    TuiCheckboxOptions,
                    TuiElasticContainerDirective,
                    TuiRadioOptions,
                    tuiCreateKeyStepsTransformer,
                    tuiDateStreamWithTransformer,
                    tuiKeyStepValueToPercentage,
                    tuiPercentageToKeyStepValue,
                } from '@taiga-ui/kit';
                import {
                    TUI_ALERT_DEFAULT_OPTIONS,
                    TuiExpandComponent,
                    TuiFullscreen,
                } from '@taiga-ui/core';

                @Component({
                    imports: [
                        TuiFullscreen,
                        TuiElasticContainerDirective,
                        TuiExpandComponent,
                    ],
                })
                export class TestComponent {
                    protected readonly checkbox: TuiCheckboxOptions | null = null;
                    protected readonly radio: TuiRadioOptions | null = null;
                    protected readonly defaults = TUI_ALERT_DEFAULT_OPTIONS;
                    protected readonly transformer = tuiCreateKeyStepsTransformer;
                    protected readonly toPercentage = tuiKeyStepValueToPercentage;
                    protected readonly toValue = tuiPercentageToKeyStepValue;
                    protected readonly stream = tuiDateStreamWithTransformer;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
