import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample5 {
    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl(123456.789),
        decimalLimit: new UntypedFormControl(2),
        decimalSeparator: new UntypedFormControl('.'),
        thousandSeparator: new UntypedFormControl(' '),
    });

    get formattedNumber(): string {
        const {value, decimalLimit, decimalSeparator, thousandSeparator} =
            this.parametersForm.value;

        return tuiFormatNumber(value ?? 123456.789, {
            decimalLimit: decimalLimit ?? 2,
            decimalSeparator: decimalSeparator ?? '.',
            thousandSeparator: thousandSeparator ?? ' ',
        });
    }
}
