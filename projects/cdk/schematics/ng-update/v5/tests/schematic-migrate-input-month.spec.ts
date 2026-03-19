import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputMonthModule to TuiInputMonth',
        migrate({
            component: `
                import {TuiInputMonthModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    // ...
                    TuiInputMonthModule,
                  ],
                  // ...
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    // ...
                    TuiInputMonthModule,
                  ],
                  templateUrl: './test.html',
                  // ...
                })
                export class MyComponent {}
            `,
            template: `
                <tui-input-month>
                </tui-input-month>

                <tui-input-month
                    [formControl]="control"
                >
                    Choose month
                </tui-input-month>

                <tui-input-month
                    formControlName="month"
                    [tuiTextfieldCleaner]="true"
                >
                    Select month
                    <input
                        placeholder="MM.YYYY"
                        tuiTextfieldLegacy
                    />
                </tui-input-month>

                <tui-input-month
                    [(ngModel)]="value"
                >
                    Your month
                </tui-input-month>
            `,
        }),
    );

    it(
        'moves [min], [max], [disabledItemHandler] to <tui-calendar-month *tuiDropdown>',
        migrate({
            template: `
                <tui-input-month
                    [min]="minMonth"
                    [max]="maxMonth"
                    [disabledItemHandler]="disabledHandler"
                    formControlName="month"
                >
                    Month
                </tui-input-month>`,
        }),
    );

    it(
        'renames [defaultActiveYear] to [year] on <tui-calendar-month *tuiDropdown>',
        migrate({
            template: `
                <tui-input-month
                    [defaultActiveYear]="initialYear"
                    formControlName="month"
                >
                    Month
                </tui-input-month>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
