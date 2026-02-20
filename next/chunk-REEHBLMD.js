import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiRingChart} from '@taiga-ui/addon-charts';
import {type TuiSizeXL, type TuiSizeXS} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiRingChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly valueVariants = [
        [40, 30, 20, 10],
        [13769, 10172, 3018, 2592],
    ];

    protected value = this.valueVariants[0]!;

    protected readonly activeItemIndexVariants = [NaN, 0, 1, 2];

    protected activeItemIndex = this.activeItemIndexVariants[0]!;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXL | TuiSizeXS> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
    ];

    protected size = this.sizeVariants[2]!;
}
`;export{i as default};
