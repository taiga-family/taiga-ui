import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-amount-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiNumberFormatProvider({
            decimalSeparator: '.',
            thousandSeparator: ',',
            rounding: 'round',
        }),
    ],
})
export class TuiAmountExample2 {}
