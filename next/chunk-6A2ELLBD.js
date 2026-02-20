import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiInputNumber],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = 1_000;

    protected onStep(step: number): void {
        this.value = Math.max(0, (this.value ?? 0) + step);
    }
}
`;export{o as default};
