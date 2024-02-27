import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-range-example-1',
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export class TuiInputRangeExample1 {
    protected readonly min = 0;
    protected readonly max = 20;
    protected readonly sliderStep = 1;
    protected readonly steps = (this.max - this.min) / this.sliderStep;
    protected readonly quantum = 0.00001;

    protected readonly control = new FormControl([3.14159, 15]);
}
