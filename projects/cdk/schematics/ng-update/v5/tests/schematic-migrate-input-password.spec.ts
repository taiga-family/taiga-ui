import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputPasswordModule to TuiPassword',
        migrate({
            component: `
                import {TuiInputPasswordModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    // ...
                    TuiInputPasswordModule,
                  ],
                  // ...
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    // ...
                    TuiInputPasswordModule,
                  ],
                  templateUrl: './test.html',
                  // ...
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-password></tui-input-password>

                <tui-input-password [formControl]="control">
                    Enter password
                </tui-input-password>

                <tui-input-password
                    formControlName="password"
                    [tuiTextfieldCleaner]="true"
                >
                    Password
                    <input
                        placeholder="••••••••"
                        tuiTextfield
                    />
                </tui-input-password>

                <tui-input-password [(ngModel)]="value">
                    Confirm password
                </tui-input-password>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
