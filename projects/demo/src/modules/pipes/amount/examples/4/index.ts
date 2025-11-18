import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiAmountOptionsProvider,
    TuiAmountPipe,
    TuiDecimalPipe,
} from '@taiga-ui/addon-commerce';
import {TuiNumberFormat} from '@taiga-ui/core';

@Component({
    imports: [TuiAmountPipe, TuiDecimalPipe, TuiNumberFormat],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({currencyAlign: 'left'})],
})
export default class Example {}
