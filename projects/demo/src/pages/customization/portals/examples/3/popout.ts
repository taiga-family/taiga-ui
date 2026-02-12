import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiLegendItem, TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiHovered, tuiSum} from '@taiga-ui/cdk';
import {TuiRoot, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiAmountPipe, TuiHovered, TuiLegendItem, TuiRingChart, TuiRoot, TuiTitle],
    templateUrl: './popout.html',
    styleUrl: './popout.less',
    changeDetection,
})
export class Popout {
    protected activeItemIndex = NaN;

    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.value);
    protected readonly labels = ['Food', 'Cafe', 'OSS', 'Taxi', 'Other'];

    protected isItemActive(index: number): boolean {
        return this.activeItemIndex === index;
    }

    protected onHover(index: number, hovered: boolean): void {
        this.activeItemIndex = hovered ? index : NaN;
    }
}
