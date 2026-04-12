import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputYearModule to TuiInputYear',
        migrate({
            component: `
                import {TuiInputYearModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    // ...
                    TuiInputYearModule,
                  ],
                  // ...
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    // ...
                    TuiInputYearModule,
                  ],
                  templateUrl: './test.html',
                  // ...
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <form [formGroup]="form">
                    <tui-input-year formControlName="value">
                        Choose a month
                    </tui-input-year>
                </form>

                <tui-input-year
                    class="b-form"
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a year
                    <input
                        placeholder="Not 2022 please"
                        tuiTextfield
                    />
                </tui-input-year>

                <tui-input-year
                    formControlName="value"
                    tuiTextfieldSize="s"
                    class="tui-space_bottom-2"
                >
                    Choose a year
                </tui-input-year>

                <tui-input-year
                    class="b-form"
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a year
                    <input
                        placeholder="Not 2022 please"
                        tuiTextfieldLegacy
                    />
                </tui-input-year>

                <tui-input-year
                    [max]="maxValue"
                    [min]="minValue"
                    [(ngModel)]="value"
                ></tui-input-year>
            `,
        }),
    );

    it(
        'removes [tuiTextfieldLabelOutside] from tui-input-year',
        migrate({
            template: /* HTML */ `
                <tui-input-year
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Choose a year
                </tui-input-year>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
