import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-currency-example1`,
    templateUrl: `./template.html`,
    changeDetection,
    encapsulation,
})
export class TuiCurrencyExample1 {}
