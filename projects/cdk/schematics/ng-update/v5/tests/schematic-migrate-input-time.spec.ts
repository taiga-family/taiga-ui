import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputTimeModule to TuiInputTime',
        migrate({
            component: `
                import {TuiInputTimeModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    TuiInputTimeModule,
                  ],
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    TuiInputTimeModule,
                  ],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: `
                <tui-input-time>Pick a time</tui-input-time>

                <tui-input-time
                    [formControl]="control"
                >
                    Start time
                </tui-input-time>

                <tui-input-time
                    formControlName="time"
                    [tuiTextfieldCleaner]="true"
                >
                    End time
                </tui-input-time>

                <tui-input-time [(ngModel)]="value">
                    <input tuiTextfieldLegacy />
                </tui-input-time>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
