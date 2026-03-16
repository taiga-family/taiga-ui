import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputPhoneInternationalModule to TuiInputPhoneInternational',
        migrate({
            component: `
                import {TuiInputPhoneInternationalModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiInputPhoneInternationalModule],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: `
                <tui-input-phone-international>
                </tui-input-phone-international>

                <tui-input-phone-international
                    [formControl]="control"
                >
                    Choose a country
                </tui-input-phone-international>

                <tui-input-phone-international
                    formControlName="phone"
                    [tuiTextfieldCleaner]="true"
                >
                    Phone number
                    <input
                        placeholder="+7 000 000-00-00"
                        tuiTextfieldLegacy
                    />
                </tui-input-phone-international>

                <tui-input-phone-international
                    [(ngModel)]="value"
                >
                    Your phone
                </tui-input-phone-international>
            `,
        }),
    );

    it(
        'moves [countries] to <input tuiInputPhoneInternational>',
        migrate({
            template: `
<tui-input-phone-international
    [countries]="allowedCountries"
    formControlName="phone"
>
    Phone
</tui-input-phone-international>`,
        }),
    );

    it(
        'moves [(countryIsoCode)] to <input tuiInputPhoneInternational>',
        migrate({
            template: `
<tui-input-phone-international
    [(countryIsoCode)]="isoCode"
    formControlName="phone"
>
    Phone
</tui-input-phone-international>`,
        }),
    );

    it(
        'moves [countries] and [(countryIsoCode)] together',
        migrate({
            template: `
<tui-input-phone-international
    [countries]="allowedCountries"
    [(countryIsoCode)]="isoCode"
    formControlName="phone"
    [tuiTextfieldCleaner]="true"
>
    Phone
</tui-input-phone-international>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
