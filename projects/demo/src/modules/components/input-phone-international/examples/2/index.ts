import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: 'tui-input-phone-international-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputPhoneExample2 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('', Validators.minLength(12)),
    });

    readonly countries = Object.values(TuiCountryIsoCode);

    countryIsoCode = TuiCountryIsoCode.US;
}
