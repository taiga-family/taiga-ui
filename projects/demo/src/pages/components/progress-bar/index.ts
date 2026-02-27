import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink, type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiLink, TuiProgress],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected size: TuiSizeXS | TuiSizeXXL = this.sizeVariants[2]!;

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-background-accent-1)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'linear-gradient(to right, var(--tui-chart-categorical-02), var(--tui-chart-categorical-14), var(--tui-chart-categorical-12))',
    ];

    protected color = this.colorVariants[0]!;

    protected readonly examples = [
        'Basic',
        'Multicolor',
        'Sizes',
        'With label',
        'Stacked progress bars',
        'Indeterminate',
        'Customizable corners',
    ];
}
