import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

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
            template: `
                <tui-input-date>
                </tui-input-date>

                <tui-input-date
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a date
                    <input
                        tuiTextfieldLegacy
                    />
                </tui-input-date>

                <tui-input-date
                    formControlName="date"
                >
                    Pick date
                </tui-input-date>

                <tui-input-date
                    [(ngModel)]="value"
                >
                    Date
                </tui-input-date>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
