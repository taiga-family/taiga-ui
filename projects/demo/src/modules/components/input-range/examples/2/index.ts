import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCurrencyPipe, TuiInputRange, TuiLet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [42, 777];
}
