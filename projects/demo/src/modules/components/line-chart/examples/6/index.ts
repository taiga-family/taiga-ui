import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {type TuiContext} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value: readonly TuiPoint[] = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 14797200],
        [5, 1475709],
        [6, 650700],
        [7, 1210616],
        [8, 0],
        [9, 9999999999999],
        [10, 0],
        [11, 0],
        [12, 0],
        [13, 0],
        [14, 0],
        [15, 0],
        [16, 0],
    ];

    protected readonly stringify = String;

    protected readonly dateLabels = [
        '',
        '',
        '',
        '',
        '',
        '6 Oct',
        '',
        '',
        '',
        '',
        '',
        '',
        '13 Oct',
        '',
        '',
        '',
        '',
    ];

    protected readonly chartLabels = ['0', '50k $', '100k $'];
    protected readonly yStartingPoint = -799999999999.92;
    protected readonly width = 16;
    protected readonly height = 11599999999998.84;

    protected readonly hintContent = ({
        $implicit,
    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0]?.[1] ?? 0;
}
