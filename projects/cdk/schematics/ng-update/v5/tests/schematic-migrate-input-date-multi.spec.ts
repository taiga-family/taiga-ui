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
            template: `
                <tui-input-date multiple>
                </tui-input-date>

                <tui-input-date
                    multiple
                    [formControl]="control"
                >
                    Choose dates
                </tui-input-date>

                <tui-input-date
                    multiple
                    formControlName="dates"
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
            template: `
                <tui-input-date
                    multiple
                    [min]="minDate"
                    [max]="maxDate"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    it(
        'moves [disabledItemHandler] and [markerHandler] to <tui-calendar *tuiDropdown>',
        migrate({
            template: `
                <tui-input-date
                    multiple
                    [disabledItemHandler]="disabledHandler"
                    [markerHandler]="markerHandler"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    it(
        'moves [rows] to <tui-textfield multi>',
        migrate({
            template: `
                <tui-input-date
                    multiple
                    [rows]="2"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    it(
        'moves placeholder to <input tuiInputDateMulti>',
        migrate({
            template: `
                <tui-input-date
                    multiple
                    placeholder="Select dates"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    it(
        'moves [defaultActiveYearMonth] to [month] on <tui-calendar *tuiDropdown>',
        migrate({
            template: `
                <tui-input-date
                    multiple
                    [defaultActiveYearMonth]="initialMonth"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    it(
        'adds TODO for removed attrs ([tagValidator], [(search)])',
        migrate({
            template: `
                <tui-input-date
                    multiple
                    [tagValidator]="myValidator"
                    [(search)]="searchValue"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    it(
        'silently removes [editable] and [inputHidden]',
        migrate({
            template: `
                <tui-input-date
                    multiple
                    [editable]="false"
                    [inputHidden]="true"
                    formControlName="dates"
                >
                    Dates
                </tui-input-date>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
