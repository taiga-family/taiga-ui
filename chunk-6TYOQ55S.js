import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiInputSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;
    protected readonly min = 0;
    protected readonly step = 20;
    protected value = 20;

    protected increase(): void {
        this.value = Math.min(this.value + this.step, this.max);
    }

    protected decrease(): void {
        this.value = Math.max(this.value - this.step, this.min);
    }
}
`;export{o as default};
