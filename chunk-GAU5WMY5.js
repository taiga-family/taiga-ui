import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiChartHint, TuiLineChart} from '@taiga-ui/addon-charts';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiHint, type TuiPoint} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiChartHint, TuiHint, TuiLineChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
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
        \`Vertical: \${$implicit[1]}\\nHorizontal: \${$implicit[0]}\`;
}
`;export{e as default};
