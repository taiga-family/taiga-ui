import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatPhone} from '@taiga-ui/core';

@Component({
    selector: `tui-format-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample5 {
    parametersForm = new FormGroup({
        value: new FormControl(`+79991234567`),
        countryCode: new FormControl(`+7`),
        phoneMask: new FormControl(`### ###-##-##`),
    });

    get formattedPhone(): string {
        const {value, countryCode, phoneMask} = this.parametersForm.value;

        return tuiFormatPhone(value || ``, countryCode || ``, phoneMask || ``);
    }
}
