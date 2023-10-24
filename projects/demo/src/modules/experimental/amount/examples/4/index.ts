import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider} from '@taiga-ui/experimental';

@Component({
    selector: 'tui-amount-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        tuiAmountOptionsProvider({
            sign: 'always',
            decimal: 'always',
        }),
    ],
})
export class TuiAmountExample4 {}
