import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_ALL_COUNTRIES_ISO_CODES} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-phone-international-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputPhoneExample2 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('', Validators.minLength(12)),
    });

    protected readonly countries = TUI_ALL_COUNTRIES_ISO_CODES;

    protected countryIsoCode: TuiCountryIsoCode = 'US';
}
