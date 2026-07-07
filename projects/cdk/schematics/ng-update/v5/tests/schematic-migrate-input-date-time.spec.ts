import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputDateTimeModule to TuiInputDateTime',
        migrate({
            component: /* TypeScript */ `
                import {TuiInputDateTimeModule} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiInputDateTimeModule],
                    templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-date-time></tui-input-date-time>

                <tui-input-date-time
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a date
                    <input tuiTextfieldLegacy />
                </tui-input-date-time>

                <tui-input-date-time formControlName="date">
                    Pick date
                </tui-input-date-time>

                <tui-input-date-time [(ngModel)]="value">Date</tui-input-date-time>
            `,
        }),
    );

    it(
        'moves [min], [max] and [timeMode] to <input tuiInputDateTime>',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    formControlName="date"
                    timeMode="HH:MM:SS"
                    [max]="maxDate"
                    [min]="minDate"
                >
                    Date
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'renames [defaultActiveYearMonth] to [month] on <tui-calendar> and keeps [disabledItemHandler] on <tui-textfield>',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    formControlName="date"
                    [defaultActiveYearMonth]="initialMonth"
                    [disabledItemHandler]="disabledHandler"
                >
                    Date
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'uses placeholder when [tuiTextfieldLabelOutside] is true',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Choose a date
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'adds TODO comment for dynamic [tuiTextfieldLabelOutside]',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    formControlName="value"
                    [tuiTextfieldLabelOutside]="isLabelOutside"
                >
                    Choose a date
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'reuses an existing legacy <input> child instead of creating a new one',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time [(ngModel)]="value">
                    Choose a date
                    <input tuiTextfieldLegacy />
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'preserves camelCase for (ngModelChange) and [formControlName] bindings',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time
                    [formControlName]="control"
                    (ngModelChange)="onChange($event)"
                >
                    Choose a date
                </tui-input-date-time>
            `,
        }),
    );

    it(
        'leaves a self-closing tui-input-date-time untouched (no end tag to migrate into)',
        migrate({
            template: /* HTML */ `
                <tui-input-date-time formControlName="date">
                    Pick date
                </tui-input-date-time>
                <tui-input-date-time formControlName="other" />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
