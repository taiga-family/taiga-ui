import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

const PERCENT = 100;

@Component({
    selector: 'tui-axes-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAxesExample3 {
    readonly axisXLabels = ['0', '25', '50', '75', '100'];
    readonly value = [50, 24, 36, 95];
    readonly largest = 100;

    getBackground(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    getHeight(value: number): number {
        return Math.abs((value * PERCENT) / this.largest);
    }
}
