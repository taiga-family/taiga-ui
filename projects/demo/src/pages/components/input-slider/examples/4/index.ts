import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 10;
    protected readonly min = 0;
    protected readonly max = 1_000;
    protected readonly step = 5; // 100% / 5% = 20 total steps
    protected readonly ticksLabels = ['0', '10', '100', '500', '1000'];

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10],
        [50, 100],
        [75, 500],
        [100, this.max],
    ];
}
