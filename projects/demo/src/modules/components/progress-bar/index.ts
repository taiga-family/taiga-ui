import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiLink} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLink, TuiProgress],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected value = 6;
    protected max = 10;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size: TuiSizeXS | TuiSizeXXL = this.sizeVariants[2];

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-background-accent-1)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))',
    ];

    protected color = this.colorVariants[0];
}
