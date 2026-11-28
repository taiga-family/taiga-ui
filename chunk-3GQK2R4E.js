import"./chunk-LQ6M4NCU.js";var i=`import {Component} from '@angular/core';
import {TuiDocHint} from '@demo/components/hint';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    imports: [TuiAxes, TuiDemo, TuiDocHint, TuiLineChart, TuiLineChartHint],
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

    protected readonly hintContentVariants: ReadonlyArray<
        TuiStringHandler<TuiContext<readonly TuiPoint[]>>
    > = [
        ({$implicit}) =>
            $implicit.map(([x, y]) => \`Vertical: \${y}\\nHorizontal: \${x}\`).join('\\n'),
    ];

    protected hintContent: TuiStringHandler<TuiContext<readonly TuiPoint[]>> | null =
        null;

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
`;export{i as default};
