import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample5 {
    parametersForm = new FormGroup({
        decimalLimit: new FormControl(2),
        decimalSeparator: new FormControl('.'),
        thousandSeparator: new FormControl(' '),
        value: new FormControl(123456.789),
    });

    get formattedNumber(): string {
        const {decimalLimit, decimalSeparator, thousandSeparator, value} =
            this.parametersForm.value;

        return tuiFormatNumber(value ?? 123456.789, {
            decimalLimit: decimalLimit ?? 2,
            decimalSeparator: decimalSeparator ?? '.',
            thousandSeparator: thousandSeparator ?? ' ',
        });
    }
}
