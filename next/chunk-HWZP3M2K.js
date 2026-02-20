import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLegendItem} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiSizeS} from '@taiga-ui/core';

@Component({
    imports: [TuiAmountPipe, TuiDemo, TuiLegendItem],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected text = 'Text inside';

    protected active = false;

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-chart-categorical-04)',
        'var(--tui-background-accent-1)',
        'var(--tui-background-neutral-1)',
    ];

    protected size = this.sizeVariants[0]!;

    protected disabled = false;

    protected color = '';
}
`;export{o as default};
