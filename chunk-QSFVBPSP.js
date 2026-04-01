import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_NONE,
    TuiAxes,
    TuiBarChart,
    TuiChartHint,
} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiCeil} from '@taiga-ui/cdk';

@Component({
    imports: [TuiAmountPipe, TuiAxes, TuiBarChart, TuiChartHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly setNames = ['cdk', 'core', 'kit', 'charts'];

    protected readonly value: ReadonlyArray<[number, number, number, number]> = [
        [10, 20, 3, 7],
        [15, 18, 24, 1],
        [34, 23, 12, 9],
        [30, 14, 18, 14],
    ];

    protected readonly maxValue = 40;
    protected readonly axisYSecondaryLabels = [
        '',
        \`\${getMax(this.value) / 2} k\`,
        \`\${getMax(this.value)} k\`,
    ];

    protected readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
    protected readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;
    protected readonly verticalLinesHandler = TUI_ALWAYS_NONE;

    protected getSetName(index: number): string {
        return this.setNames[index] ?? '';
    }
}

function getMax(value: ReadonlyArray<[number, number, number, number]>): number {
    return tuiCeil(
        value.reduce((max, value) => Math.max(...value, max), 0),
        -1,
    );
}
`;export{a as default};
