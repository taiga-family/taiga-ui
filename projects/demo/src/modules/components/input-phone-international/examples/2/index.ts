import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    TUI_ALL_COUNTRIES_ISO_CODES,
    TuiInputPhoneInternationalComponent,
    TuiSortCountriesPipe,
} from '@taiga-ui/kit';

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
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('', Validators.minLength(12)),
    });

    protected readonly countries = TUI_ALL_COUNTRIES_ISO_CODES;

    protected countryIsoCode: TuiCountryIsoCode = 'US';
}
