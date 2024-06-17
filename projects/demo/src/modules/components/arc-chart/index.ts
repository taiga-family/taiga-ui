import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiArcChartComponent} from '@taiga-ui/addon-charts';
import type {TuiSizeXL} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiArcChartComponent, TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Sizes', 'Stacked'];

    protected readonly valueVariants = [
        [42],
        [40, 30, 20, 10],
        [13769, 10172, 3018, 2592],
    ];

    protected value = this.valueVariants[0];

    protected readonly maxVariants = [100, 10000, 50000];

    protected max = this.maxVariants[0];

    protected readonly sizeVariants: readonly TuiSizeXL[] = ['m', 'l', 'xl'];

    protected size = this.sizeVariants[0];

    protected minLabel = '0%';

    protected maxLabel = '100%';

    protected activeItemIndex = NaN;
}
