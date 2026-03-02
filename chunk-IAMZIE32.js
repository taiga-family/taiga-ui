import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {type TuiContext} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    protected readonly stringify = String;

    protected readonly hintContent = ({
        $implicit,
    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0]?.[1] ?? 0;
}
`;export{i as default};
