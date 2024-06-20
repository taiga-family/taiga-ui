import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiHovered, tuiSum} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiRingChart, TuiAmountPipe, AsyncPipe, TuiLegendItem, NgForOf, TuiHovered],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activeItemIndex = NaN;

    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.value);
    protected readonly labels = ['Food', 'Cafe', 'OSS', 'Taxi', 'Other'];

    protected isItemActive(index: number): boolean {
        return this.activeItemIndex === index;
    }

    protected onHover(index: number, hovered: boolean): void {
        this.activeItemIndex = hovered ? index : 0;
    }
}
