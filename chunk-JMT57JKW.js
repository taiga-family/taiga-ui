import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAxes, TuiLineChart} from '@taiga-ui/addon-charts';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiDemo, TuiLineChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        'Line',
        'Smooth',
        'Dotted',
        'Hint',
        'Several lines with hints',
    ];

    protected readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    protected readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        (y) => \`\${(10 * y).toLocaleString('ru-RU', {maximumFractionDigits: 0})} $\`,
    ];

    protected readonly xStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        (x) => \`\${100 * x}\`,
    ];

    protected yStringify: TuiStringHandler<number> | null = null;

    protected xStringify: TuiStringHandler<number> | null = null;

    protected x = 0;

    protected y = 0;

    protected width = 400;

    protected height = 200;

    protected smoothingFactor = 0;

    protected filled = false;

    protected dots = false;
}
`;export{r as default};
