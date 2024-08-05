import {AsyncPipe} from '@angular/common';
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
    standalone: true,
    imports: [TuiAmountPipe, AsyncPipe, TuiDecimalPipe, TuiNumberFormat],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({currencyAlign: 'left'})],
})
export default class Example {}
