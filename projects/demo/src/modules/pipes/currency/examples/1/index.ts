import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiCurrencyPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
