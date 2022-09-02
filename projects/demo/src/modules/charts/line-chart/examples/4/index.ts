import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';

@Component({
    selector: `tui-line-chart-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiLineChartExample4 {
    readonly value: TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    readonly singleValue: TuiPoint[] = [[200, 150]];

    readonly hint: TuiStringHandler<TuiContextWithImplicit<TuiPoint>> = ({$implicit}) =>
        `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;
}
