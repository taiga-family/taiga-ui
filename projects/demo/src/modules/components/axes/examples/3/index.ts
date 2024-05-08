import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxesComponent, TuiBarComponent} from '@taiga-ui/addon-charts';

@Component({
    standalone: true,
    imports: [TuiAxesComponent, TuiBarComponent, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly axisXLabels = ['0', '25', '50', '75', '100'];
    protected readonly value = [50, 24, 36, 95];
    protected readonly largest = 100;

    protected getBackground(index: number): string {
        return `var(--tui-chart-${index})`;
    }

    protected getHeight(value: number): number {
        return Math.abs((value * 100) / this.largest);
    }
}
