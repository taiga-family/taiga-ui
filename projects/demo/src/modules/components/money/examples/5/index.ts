import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-money-example-5',
    templateUrl: './index.html',
    providers: [
        tuiNumberFormatProvider({
            decimalSeparator: '.',
            thousandSeparator: ',',
            zeroPadding: true,
        }),
    ],
    changeDetection,
    encapsulation,
})
export class TuiMoneyExample5 {}
