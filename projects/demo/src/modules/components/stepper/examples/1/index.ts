import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepperModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-stepper-example-1',
    imports: [TuiStepperModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiStepperExample1 {}
