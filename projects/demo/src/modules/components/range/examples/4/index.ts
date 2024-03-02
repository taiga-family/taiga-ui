import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'tui-range-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRangeExample4 {
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];
    protected readonly segments = this.ticksLabels.length - 1;

    // 12.5% (of total distance) per step
    protected readonly stepPercentage = 100 / (2 * this.segments);

    protected value = [0, 100_000];

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, 0],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, 1_000_000],
    ];
}
