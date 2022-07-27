import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-stepper-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiStepperExample2 {
    readonly steps = [`Start Up`, `Cash In`, `Sell Out`, `Bro Down`];
}
