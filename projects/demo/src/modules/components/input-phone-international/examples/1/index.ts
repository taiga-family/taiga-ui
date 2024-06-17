import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiInputPhoneInternationalComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiInputPhoneInternationalComponent, ReactiveFormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
