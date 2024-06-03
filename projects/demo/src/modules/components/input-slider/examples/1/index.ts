import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHintOptionsDirective} from '@taiga-ui/core';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputSliderModule, ReactiveFormsModule, TuiHintOptionsDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly min = 5;
    protected readonly max = 20;
    protected readonly sliderStep = 1;
    protected readonly steps = (this.max - this.min) / this.sliderStep;
    protected readonly quantum = 0.01;

    protected readonly hint = `Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`;

    protected readonly control = new FormControl(6.5);
}
