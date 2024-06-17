import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
        ReactiveFormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('', Validators.minLength(12)),
    });

    protected readonly countries = getCountries();

    protected countryIsoCode: TuiCountryIsoCode = 'US';
}
