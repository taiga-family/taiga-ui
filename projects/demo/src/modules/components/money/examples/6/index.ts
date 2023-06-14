import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-money-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [tuiNumberFormatProvider({rounding: 'round'})],
})
export class TuiMoneyExample6 {}
