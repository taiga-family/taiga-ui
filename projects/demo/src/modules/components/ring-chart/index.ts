import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiRingChartComponent} from '@taiga-ui/addon-charts';
import type {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiRingChartComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly valueVariants = [
        [40, 30, 20, 10],
        [13769, 10172, 3018, 2592],
    ];

    protected value = this.valueVariants[0];

    protected readonly activeItemIndexVariants = [NaN, 0, 1, 2];

    protected activeItemIndex = this.activeItemIndexVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    protected size = this.sizeVariants[2];
}
