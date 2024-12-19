import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhoneInternational} from '@taiga-ui/experimental';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    tuiInputPhoneInternationalOptionsProvider,
    TuiSortCountriesPipe,
} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';
import {defer} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiInputPhoneInternational,
        TuiSortCountriesPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputPhoneInternationalOptionsProvider({
            metadata: defer(async () =>
                import('libphonenumber-js/max/metadata').then((m) => m.default),
            ),
        }),
    ],
})
export default class Example {
    protected readonly countries = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'CN';
    protected value = '';
}
