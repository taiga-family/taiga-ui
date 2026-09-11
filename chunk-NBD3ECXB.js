import"./chunk-LQ6M4NCU.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = 123_456_789;

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        thousandSeparator: ',',
        // 1,2345,6789
        thousandSeparatorPattern: (digits) =>
            digits.match(/\\d{1,4}(?=(?:\\d{4})*$)/g) ?? [],
    };
}
`;export{o as default};
