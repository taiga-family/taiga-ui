import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_NONE,
    TuiAxes,
    TuiBarChart,
} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiCeil, tuiPure} from '@taiga-ui/cdk';
import {TuiHint} from '@taiga-ui/core';

const BENJI = 100;

@Component({
    imports: [AsyncPipe, TuiAmountPipe, TuiAxes, TuiBarChart, TuiHint],
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
        `${this.getMax(this.value) / 2} k`,
        `${this.getMax(this.value)} k`,
    ];

    protected readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

    protected readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;

    protected readonly verticalLinesHandler = TUI_ALWAYS_NONE;

    protected getPercent(set: [number, number, number, number]): number {
        return (BENJI * Math.max(...set)) / this.getMax(this.value);
    }

    protected getSetName(index: number): string {
        return this.setNames[index] ?? '';
    }

    @tuiPure
    private getMax(value: ReadonlyArray<[number, number, number, number]>): number {
        return tuiCeil(
            value.reduce((max, value) => Math.max(...value, max), 0),
            -1,
        );
    }
}
