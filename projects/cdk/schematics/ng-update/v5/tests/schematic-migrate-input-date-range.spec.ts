import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

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

    afterEach(() => resetActiveProject());
});
