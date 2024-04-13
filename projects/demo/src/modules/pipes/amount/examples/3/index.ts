import {Component} from '@angular/core';
import {tuiAmountOptionsProvider} from '@taiga-ui/addon-commerce';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-amount-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiAmountOptionsProvider({
            sign: 'always',
            currency: 'USD',
            currencyAlign: 'left',
        }),
    ],
})
export class TuiAmountExample3 {}
