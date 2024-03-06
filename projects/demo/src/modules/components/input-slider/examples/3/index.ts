import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-slider-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputSliderExample3 {
    protected readonly control = new FormControl(10_000);
    protected readonly max = 1_000_000;
    protected readonly min = 0;
    protected readonly totalSteps = 100;
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, this.max],
    ];
}
