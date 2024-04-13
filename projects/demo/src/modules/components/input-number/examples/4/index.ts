import {Component} from '@angular/core';
import {tuiNumberFormatProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-number-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiNumberFormatProvider({decimalSeparator: '.', thousandSeparator: ','})],
})
export class TuiInputNumberExample4 {
    protected value = 1234.56;
}
