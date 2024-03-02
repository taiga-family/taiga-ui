import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    selector: 'tui-line-chart-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiLineChartExample5 {
    protected readonly values: TuiPoint[][] = [
        [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ],
        [
            [50, 40],
            [100, 60],
            [150, 90],
            [200, 120],
            [250, 150],
            [300, 110],
            [350, 130],
        ],
        [
            [50, 30],
            [100, 90],
            [150, 80],
            [200, 50],
            [250, 130],
            [300, 190],
            [350, 150],
        ],
    ];

    protected readonly hint: TuiStringHandler<TuiContext<readonly TuiPoint[]>> = ({
        $implicit,
    }) => `${$implicit[0][0]} items:\n\n${$implicit.map(([_, y]) => y).join('$\n')}$`;
}
