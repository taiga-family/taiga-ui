import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';

@Component({
    selector: 'tui-line-chart-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLineChartExample4 {
    protected readonly value: TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    protected readonly singleValue: TuiPoint[] = [[200, 150]];

    protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({$implicit}) =>
        `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;
}
