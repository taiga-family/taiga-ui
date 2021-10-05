import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-phone-international-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputPhoneExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl('+77777777777', Validators.required),
    });

    readonly countries: ReadonlyArray<TuiCountryIsoCode> = [
        TuiCountryIsoCode.RU,
        TuiCountryIsoCode.KZ,
        TuiCountryIsoCode.UA,
        TuiCountryIsoCode.BY,
    ];

    countryIsoCode = TuiCountryIsoCode.RU;
}
