import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-stepper-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiStepperExample2 {
    readonly steps = ['Start Up', 'Cash In', 'Sell Out', 'Bro Down'];
}
