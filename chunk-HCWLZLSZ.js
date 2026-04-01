import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
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
            [50, 0],
            [100, 0],
            [150, 80],
            [200, 50],
            [250, 130],
            [300, 200],
            [350, 200],
        ],
    ];

    protected readonly hint: TuiStringHandler<TuiContext<readonly TuiPoint[]>> = ({
        $implicit,
    }) => \`\${$implicit[0]?.[0]} items:\\n\\n\${$implicit.map(([_, y]) => y).join('$\\n')}$\`;
}
`;export{e as default};
