import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputRange, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 1_000_000;
    protected readonly min = 0;
    protected value = [0.42, 123_456.78];

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        precision: 2,
        decimalSeparator: ',',
        thousandSeparator: '.',
    };
}
`;export{o as default};
