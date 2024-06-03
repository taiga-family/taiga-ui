import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputRangeModule, ReactiveFormsModule, TuiTextfieldControllerModule],
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
export default class ExampleComponent {
    protected readonly min = 0;
    protected readonly max = 20;
    protected readonly sliderStep = 1;
    protected readonly steps = (this.max - this.min) / this.sliderStep;
    protected readonly quantum = 0.00001;

    protected readonly control = new FormControl([3.14159, 15]);
}
