import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

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

    afterEach(() => resetActiveProject());
});
