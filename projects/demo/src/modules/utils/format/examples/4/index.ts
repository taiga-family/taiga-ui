import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatPhone} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample4 {
    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl('+79991234567'),
        countryCode: new UntypedFormControl('+7'),
        phoneMask: new UntypedFormControl('### ###-##-##'),
    });

    get formattedPhone(): string {
        const {value, countryCode, phoneMask} = this.parametersForm.value;

        return tuiFormatPhone(value ?? '', countryCode ?? '', phoneMask ?? '');
    }
}
