import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
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
            template: /* HTML */ `
                <tui-input-phone-international></tui-input-phone-international>

                <tui-input-phone-international [formControl]="control">
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

                <tui-input-phone-international [(ngModel)]="value">
                    Your phone
                </tui-input-phone-international>
            `,
        }),
    );

    it(
        'migrate TuiInputPhoneInternational from experimental to TuiInputPhoneInternational',
        migrate({
            component: `
                import {TuiInputPhoneInternational} from '@taiga-ui/experimental';

                @Component({
                  standalone: true,
                  imports: [TuiInputPhoneInternational],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-phone-international></tui-input-phone-international>

                <tui-input-phone-international [formControl]="control">
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

                <tui-input-phone-international [(ngModel)]="value">
                    Your phone
                </tui-input-phone-international>
            `,
        }),
    );

    it(
        'moves [countries] to <input tuiInputPhoneInternational>',
        migrate({
            template: /* HTML */ `
                <tui-input-phone-international
                    formControlName="phone"
                    [countries]="allowedCountries"
                >
                    Phone
                </tui-input-phone-international>
            `,
        }),
    );

    it(
        'moves [(countryIsoCode)] to <input tuiInputPhoneInternational>',
        migrate({
            template: /* HTML */ `
                <tui-input-phone-international
                    formControlName="phone"
                    [(countryIsoCode)]="isoCode"
                >
                    Phone
                </tui-input-phone-international>
            `,
        }),
    );

    it(
        'moves [countries] and [(countryIsoCode)] together',
        migrate({
            template: /* HTML */ `
                <tui-input-phone-international
                    formControlName="phone"
                    [countries]="allowedCountries"
                    [tuiTextfieldCleaner]="true"
                    [(countryIsoCode)]="isoCode"
                >
                    Phone
                </tui-input-phone-international>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
