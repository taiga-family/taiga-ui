import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiInputDateTimeModule to TuiInputDateTime', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates import and basic template with label',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiInputDateTimeModule} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiInputDateTimeModule],
                    template: \`
                        <tui-input-date-time [(ngModel)]="value">
                            Choose a date
                            <input tuiTextfieldLegacy />
                        </tui-input-date-time>
                    \`,
                })
                export class TestComponent {
                    protected value = null;
                }
            `,
        }),
    );

    it(
        'migrates [min]/[max]/[timeMode] onto input and [defaultActiveYearMonth] onto calendar',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    [min]="min"
                    [max]="max"
                    [timeMode]="mode"
                    [defaultActiveYearMonth]="activeMonth"
                    [(ngModel)]="value"
                >
                    Choose a date
                    <input tuiTextfieldLegacy />
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'keeps [disabledItemHandler] on tui-textfield',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    [disabledItemHandler]="handler"
                    [formControl]="ctrl"
                >
                    Label
                    <input tuiTextfieldLegacy />
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'migrates when there is no explicit <input> child',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time [formControl]="ctrl">
                    Choose a date
                </tui-input-date-time>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
