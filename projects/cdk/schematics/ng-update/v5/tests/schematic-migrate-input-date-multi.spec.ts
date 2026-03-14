import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

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

    afterEach(() => resetActiveProject());
});
