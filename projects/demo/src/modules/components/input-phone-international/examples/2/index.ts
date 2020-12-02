import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiCountryIsoCode} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-phone-international-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl('', Validators.minLength(12)),
    });

    readonly countries = Object.values(TuiCountryIsoCode);

    countryIsoCode = TuiCountryIsoCode.US;
}
