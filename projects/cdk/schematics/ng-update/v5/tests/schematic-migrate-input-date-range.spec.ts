import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputDateRangeModule to TuiInputDateRange',
        migrate({
            component: `
                import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiInputDateRangeModule],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-date-range></tui-input-date-range>

                <tui-input-date-range
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a range
                    <input tuiTextfieldLegacy />
                </tui-input-date-range>

                <tui-input-date-range formControlName="range">
                    Pick date range
                </tui-input-date-range>

                <tui-input-date-range [(ngModel)]="value">
                    Date range
                </tui-input-date-range>
            `,
        }),
    );

    it(
        'moves [min], [max], [minLength], [maxLength] to <input tuiInputDateRange>',
        migrate({
            template: /* HTML */ `
                <tui-input-date-range
                    formControlName="range"
                    [max]="maxDate"
                    [maxLength]="{month: 1}"
                    [min]="minDate"
                    [minLength]="{day: 3}"
                >
                    Range
                </tui-input-date-range>
            `,
        }),
    );

    it(
        'moves [disabledItemHandler] and [markerHandler] to <tui-calendar-range *tuiDropdown>',
        migrate({
            template: /* HTML */ `
                <tui-input-date-range
                    formControlName="range"
                    [disabledItemHandler]="disabledHandler"
                    [markerHandler]="markerHandler"
                >
                    Range
                </tui-input-date-range>
            `,
        }),
    );

    it(
        'moves [items] and [defaultViewedMonth] to <tui-calendar-range *tuiDropdown>',
        migrate({
            template: /* HTML */ `
                <tui-input-date-range
                    formControlName="range"
                    [defaultViewedMonth]="initialMonth"
                    [items]="periods"
                >
                    Range
                </tui-input-date-range>
            `,
        }),
    );

    it(
        'removes [tuiTextfieldLabelOutside] from tui-input-date-range',
        migrate({
            template: /* HTML */ `
                <tui-input-date-range
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Choose a range
                </tui-input-date-range>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
