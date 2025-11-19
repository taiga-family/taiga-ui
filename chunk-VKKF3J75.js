import"./chunk-42JZD6NG.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiAmountPipe],
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
export default class Example {}
`;export{t as default};
