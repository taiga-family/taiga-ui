import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-amount-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAmountExample2 {}
