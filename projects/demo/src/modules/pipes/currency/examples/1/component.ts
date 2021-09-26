import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-currency-example1',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiCurrencyExample1 {}
