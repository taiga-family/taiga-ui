import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepperModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-stepper-example-2',
    imports: [TuiStepperModule, NgForOf],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiStepperExample2 {
    protected readonly steps = ['Start Up', 'Cash In', 'Sell Out', 'Bro Down'];
}
