import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatPhone} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected parametersForm = new FormGroup({
        value: new FormControl('+79991234567'),
        countryCode: new FormControl('+7'),
        phoneMask: new FormControl('### ###-##-##'),
    });

    protected get formattedPhone(): string {
        const {value, countryCode, phoneMask} = this.parametersForm.value;

        return tuiFormatPhone(value ?? '', countryCode ?? '', phoneMask ?? '');
    }
}
