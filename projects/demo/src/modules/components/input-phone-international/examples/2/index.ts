import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: `tui-input-phone-international-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(``, Validators.minLength(12)),
    });

    readonly countries = Object.values(TuiCountryIsoCode);

    countryIsoCode = TuiCountryIsoCode.US;
}
