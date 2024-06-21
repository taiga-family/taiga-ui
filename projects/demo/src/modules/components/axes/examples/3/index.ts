import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiBar} from '@taiga-ui/addon-charts';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiBar, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly axisXLabels = ['0', '25', '50', '75', '100'];
    protected readonly value = [50, 24, 36, 95];
    protected readonly largest = 100;

    protected getHeight(value: number): number {
        return Math.abs((value * 100) / this.largest);
    }
}
