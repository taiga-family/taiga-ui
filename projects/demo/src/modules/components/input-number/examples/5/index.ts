import {Component} from '@angular/core';
import {tuiNumberFormatProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-number-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiNumberFormatProvider({decimalSeparator: ',', thousandSeparator: '.'})],
})
export class TuiInputNumberExample5 {
    protected value = 123.56;
}
