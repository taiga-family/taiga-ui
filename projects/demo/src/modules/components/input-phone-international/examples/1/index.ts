import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: 'tui-input-phone-international-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputPhoneExample1 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('+79777777777', Validators.required),
    });

    protected readonly countries: readonly TuiCountryIsoCode[] = ['RU', 'KZ', 'UA', 'BY'];

    protected countryIsoCode: TuiCountryIsoCode = 'RU';

    protected contact = {
        phone: '+375123456789',
        phoneCountryCode: 'BY' as TuiCountryIsoCode,
    };

    protected patchValue(): void {
        this.countryIsoCode = this.contact.phoneCountryCode;
        this.testForm.get('testValue')?.patchValue(this.contact.phone);
    }
}
