import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputDate[multiple] to TuiInputDateMulti',
        migrate({
            component: `
                import {TuiInputDateModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    // ...
                    TuiInputDateModule,
                  ],
                  // ...
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    // ...
                    TuiInputDateModule,
                  ],
                  templateUrl: './test.html',
                  // ...
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-date multiple></tui-input-date>

                <tui-input-date
                    multiple
                    [formControl]="control"
                >
                    Choose dates
                </tui-input-date>

                <tui-input-date
                    formControlName="dates"
                    multiple
                    [tuiTextfieldCleaner]="true"
                >
                    Selected dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'moves [min] and [max] to <input tuiInputDateMulti>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    [max]="maxDate"
                    [min]="minDate"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'moves [disabledItemHandler] and [markerHandler] to <tui-calendar *tuiDropdown>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    [disabledItemHandler]="disabledHandler"
                    [markerHandler]="markerHandler"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'moves [rows] to <tui-textfield multi>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    [rows]="2"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'moves placeholder to <input tuiInputDateMulti>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    placeholder="Select dates"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'moves [defaultActiveYearMonth] to [month] on <tui-calendar *tuiDropdown>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    [defaultActiveYearMonth]="initialMonth"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'adds TODO for removed attrs ([tagValidator], [(search)])',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    [tagValidator]="myValidator"
                    [(search)]="searchValue"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    it(
        'silently removes [editable] and [inputHidden]',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="dates"
                    multiple
                    [editable]="false"
                    [inputHidden]="true"
                >
                    Dates
                </tui-input-date>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
