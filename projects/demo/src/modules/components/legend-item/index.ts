import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLegendItemComponent} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiSizeS} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLegendItemComponent, TuiAmountPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected text = 'Text inside';

    protected active = false;

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-support-04)',
        'var(--tui-primary)',
        'var(--tui-secondary)',
    ];

    protected size = this.sizeVariants[0];

    protected disabled = false;

    protected color = '';
}
