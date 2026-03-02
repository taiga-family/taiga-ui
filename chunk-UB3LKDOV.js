import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDecimalSymbol, tuiFormatNumber, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiInput],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(123456.789),
        precision: new FormControl(2),
        decimalSeparator: new FormControl<TuiDecimalSymbol>('.'),
        thousandSeparator: new FormControl(' '),
    });

    protected get formattedNumber(): string {
        const {value, precision, decimalSeparator, thousandSeparator} =
            this.parametersForm.value;

        return tuiFormatNumber(value ?? 123456.789, {
            precision: precision ?? 2,
            decimalSeparator: decimalSeparator ?? '.',
            thousandSeparator: thousandSeparator ?? ' ',
        });
    }
}
`;export{r as default};
