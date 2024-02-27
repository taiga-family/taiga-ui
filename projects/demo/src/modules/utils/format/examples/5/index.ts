import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDecimalSymbol, tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample5 {
    protected parametersForm = new FormGroup({
        value: new FormControl(123456.789),
        decimalLimit: new FormControl(2),
        decimalSeparator: new FormControl<TuiDecimalSymbol>('.'),
        thousandSeparator: new FormControl(' '),
    });

    protected get formattedNumber(): string {
        const {value, decimalLimit, decimalSeparator, thousandSeparator} =
            this.parametersForm.value;

        return tuiFormatNumber(value ?? 123456.789, {
            decimalLimit: decimalLimit ?? 2,
            decimalSeparator: decimalSeparator ?? '.',
            thousandSeparator: thousandSeparator ?? ' ',
        });
    }
}
