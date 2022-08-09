import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: `tui-format-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample6 {
    parametersForm = new FormGroup({
        value: new FormControl(123456.789),
        decimalLimit: new FormControl(2),
        decimalSeparator: new FormControl(`.`),
        thousandSeparator: new FormControl(` `),
    });

    get formattedNumber(): string {
        const {value, decimalLimit, decimalSeparator, thousandSeparator} =
            this.parametersForm.value;

        return tuiFormatNumber(value, {
            decimalLimit,
            decimalSeparator,
            thousandSeparator,
        });
    }
}
