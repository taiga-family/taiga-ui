import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiInputPhoneInternationalComponent, TuiSortCountriesPipe} from '@taiga-ui/kit';
import {getCountries} from 'libphonenumber-js';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiInputPhoneInternationalComponent,
        TuiSortCountriesPipe,
        FormsModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = getCountries();
    protected countryIsoCode: TuiCountryIsoCode = 'CN';
    protected value = '';
}
