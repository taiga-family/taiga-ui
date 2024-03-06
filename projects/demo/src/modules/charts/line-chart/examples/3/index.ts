import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiPoint} from '@taiga-ui/core';

@Component({
    selector: 'tui-line-chart-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLineChartExample3 {
    protected readonly dotted: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
    ];

    protected readonly solid: readonly TuiPoint[] = [
        [150, 50],
        [200, 150],
        [250, 155],
    ];

    protected readonly dashed: readonly TuiPoint[] = [
        [250, 155],
        [300, 190],
        [350, 90],
    ];
}
