import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-range-example-1`,
    templateUrl: `./index.html`,
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    changeDetection,
    encapsulation,
})
export class TuiInputRangeExample1 {
    readonly min = 0;
    readonly max = 20;
    readonly sliderStep = 1;
    readonly steps = (this.max - this.min) / this.sliderStep;
    readonly quantum = 0.00001;

    readonly control = new FormControl([3.14159, 15]);
}
