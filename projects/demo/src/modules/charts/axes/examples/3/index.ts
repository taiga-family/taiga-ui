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
    protected readonly axisXLabels = ['0', '25', '50', '75', '100'];
    protected readonly value = [50, 24, 36, 95];
    protected readonly largest = 100;

    protected getBackground(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    protected getHeight(value: number): number {
        return Math.abs((value * PERCENT) / this.largest);
    }
}
