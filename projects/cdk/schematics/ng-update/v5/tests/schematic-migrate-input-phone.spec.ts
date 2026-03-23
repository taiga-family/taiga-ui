import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputPhoneModule to TuiInputPhone',
        migrate({
            component: `
                import {TuiInputPhoneModule} from '@taiga-ui/legacy';

                @NgModule({
                  imports: [
                    // ...
                    TuiInputPhoneModule,
                  ],
                  // ...
                })
                export class MyModule {}

                @Component({
                  standalone: true,
                  imports: [
                    // ...
                    TuiInputPhoneModule,
                  ],
                  templateUrl: './test.html',
                  // ...
                })
                export class MyComponent {}
            `,
            template: `
                <form [formGroup]="form">
                  <tui-input-phone formControlName="value">Phone number</tui-input-phone>
                </form>

                <tui-input-phone
                    class="b-form"
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Enter phone
                    <input
                        placeholder="+7 (___) ___-__-__"
                        tuiTextfield
                    />
                </tui-input-phone>

                <tui-input-phone
                    formControlName="value"
                    tuiTextfieldSize="s"
                    class="tui-space_bottom-2"
                >
                    Enter phone
                </tui-input-phone>

                <tui-input-phone
                    class="b-form"
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Enter phone
                    <input
                        placeholder="+7 (___) ___-__-__"
                        tuiTextfieldLegacy
                    />
                </tui-input-phone>

                <tui-input-phone
                    [(ngModel)]="value"
                >
                </tui-input-phone>
            `,
        }),
    );

    it(
        'moves [allowText] to <input tuiInputPhone>',
        migrate({
            template:
                '<tui-input-phone [allowText]="true" formControlName="value">Phone</tui-input-phone>',
        }),
    );

    it(
        'adds TODO for countryCode and removes it from wrapper',
        migrate({
            template:
                '<tui-input-phone countryCode="+7" formControlName="value">Phone</tui-input-phone>',
        }),
    );

    it(
        'adds TODO for phoneMaskAfterCountryCode and removes it from wrapper',
        migrate({
            template:
                '<tui-input-phone phoneMaskAfterCountryCode="(###) ###-##-##" formControlName="value">Phone</tui-input-phone>',
        }),
    );

    it(
        'adds single TODO when both countryCode and phoneMaskAfterCountryCode are present',
        migrate({
            template: `
                <tui-input-phone
                    countryCode="+7"
                    phoneMaskAfterCountryCode="(###) ###-##-##"
                    formControlName="value"
                >
                    Phone
                </tui-input-phone>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
