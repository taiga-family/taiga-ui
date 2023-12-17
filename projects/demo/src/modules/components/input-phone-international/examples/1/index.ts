import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: 'tui-input-phone-international-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputPhoneExample1 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('+79777777777', Validators.required),
    });

    readonly countries: readonly TuiCountryIsoCode[] = [
        TuiCountryIsoCode.RU,
        TuiCountryIsoCode.KZ,
        TuiCountryIsoCode.UA,
        TuiCountryIsoCode.BY,
    ];

    countryIsoCode = TuiCountryIsoCode.RU;

    contact = {
        phone: '+375123456789',
        phoneCountryCode: TuiCountryIsoCode.BY,
    };

    patchValue(): void {
        this.countryIsoCode = this.contact.phoneCountryCode;
        this.testForm.get('testValue')?.patchValue(this.contact.phone);
    }
}
