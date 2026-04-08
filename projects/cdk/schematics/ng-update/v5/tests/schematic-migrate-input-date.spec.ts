import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputDateModule to TuiInputDate',
        migrate({
            component: `
                import {TuiInputDateModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiInputDateModule],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-date></tui-input-date>

                <tui-input-date
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a date
                    <input tuiTextfieldLegacy />
                </tui-input-date>

                <tui-input-date formControlName="date">Pick date</tui-input-date>

                <tui-input-date [(ngModel)]="value">Date</tui-input-date>
            `,
        }),
    );

    it(
        'moves [min] and [max] to <input tuiInputDate>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="date"
                    [max]="maxDate"
                    [min]="minDate"
                >
                    Date
                </tui-input-date>
            `,
        }),
    );

    it(
        'moves [disabledItemHandler] and [markerHandler] to <tui-calendar *tuiDropdown>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="date"
                    [disabledItemHandler]="disabledHandler"
                    [markerHandler]="markerHandler"
                >
                    Date
                </tui-input-date>
            `,
        }),
    );

    it(
        'renames [defaultActiveYearMonth] to [month] on <tui-calendar *tuiDropdown>',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="date"
                    [defaultActiveYearMonth]="initialMonth"
                >
                    Date
                </tui-input-date>
            `,
        }),
    );

    it(
        'adds TODO for [items] (no v5 equivalent)',
        migrate({
            template: /* HTML */ `
                <tui-input-date
                    formControlName="date"
                    [items]="namedDays"
                >
                    Date
                </tui-input-date>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
