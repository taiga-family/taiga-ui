import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-stepper-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiStepperExample3 {
    protected readonly steps = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
}
