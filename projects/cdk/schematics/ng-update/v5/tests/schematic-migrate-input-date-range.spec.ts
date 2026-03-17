import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({
    collection: join(__dirname, '../../../migration.json'),
});

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
            template: `
                <tui-input-date-range>
                </tui-input-date-range>

                <tui-input-date-range
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a range
                    <input
                        tuiTextfieldLegacy
                    />
                </tui-input-date-range>

                <tui-input-date-range
                    formControlName="range"
                >
                    Pick date range
                </tui-input-date-range>

                <tui-input-date-range
                    [(ngModel)]="value"
                >
                    Date range
                </tui-input-date-range>
            `,
        }),
    );

    it(
        'moves [min], [max], [minLength], [maxLength] to <input tuiInputDateRange>',
        migrate({
            template: `
                <tui-input-date-range
                    [min]="minDate"
                    [max]="maxDate"
                    [minLength]="{day: 3}"
                    [maxLength]="{month: 1}"
                    formControlName="range"
                >
                    Range
                </tui-input-date-range>`,
        }),
    );

    it(
        'moves [disabledItemHandler] and [markerHandler] to <tui-calendar-range *tuiDropdown>',
        migrate({
            template: `
                <tui-input-date-range
                    [disabledItemHandler]="disabledHandler"
                    [markerHandler]="markerHandler"
                    formControlName="range"
                >
                    Range
                </tui-input-date-range>`,
        }),
    );

    it(
        'adds TODO for [items] and [defaultViewedMonth]',
        migrate({
            template: `
                <tui-input-date-range
                    [items]="periods"
                    [defaultViewedMonth]="initialMonth"
                    formControlName="range"
                >
                    Range
                </tui-input-date-range>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
