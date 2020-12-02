import {Component} from '@angular/core';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_NONE,
    TUI_DEFAULT_COLOR_HANDLER,
} from '@taiga-ui/addon-charts';
import {ceil, tuiPure} from '@taiga-ui/cdk';
import {TuiColor} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const BENJI = 100;

@Component({
    selector: 'tui-axes-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiAxesExample2 {
    readonly value: ReadonlyArray<[number, number, number, number]> = [
        [10, 20, 3, 7],
        [15, 18, 24, 1],
        [34, 23, 12, 9],
        [30, 14, 18, 14],
    ];

    readonly axisYSecondaryLabels = [
        '',
        `${this.getMax(this.value) / 2} тыс.`,
        `${this.getMax(this.value)} тыс.`,
    ];

    readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

    readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;

    readonly verticalLinesHandler = TUI_ALWAYS_NONE;

    private readonly setNames = ['Симпсоны', 'Смурфы', 'Черепашки Ниндзя', 'Танос'];

    getPercent(set: [number, number, number, number]): number {
        return (BENJI * Math.max(...set)) / this.getMax(this.value);
    }

    getSetName(index: number): string {
        return this.setNames[index];
    }

    getBackground(index: number): TuiColor | string | null {
        return TUI_DEFAULT_COLOR_HANDLER(index);
    }

    @tuiPure
    private getMax(value: ReadonlyArray<[number, number, number, number]>): number {
        return ceil(
            value.reduce((max, value) => Math.max(...value, max), 0),
            -1,
        );
    }
}
