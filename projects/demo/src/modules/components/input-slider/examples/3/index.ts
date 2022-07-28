import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: `tui-input-slider-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputSliderExample3 {
    readonly control = new FormControl(10_000);
    readonly max = 1_000_000;
    readonly min = 0;
    readonly totalSteps = 100;
    readonly ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];

    readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, this.max],
    ];
}
