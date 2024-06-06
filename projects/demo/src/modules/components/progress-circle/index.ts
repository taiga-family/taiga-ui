import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLinkDirective, TuiProgressModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({min: 0})],
})
export default class PageComponent {
    protected value = 6;
    protected max = 10;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXXL | TuiSizeXXS> = [
        'xxs',
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size: TuiSizeXXL | TuiSizeXXS = 'm';

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-primary)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'url(#gradient)',
    ];

    protected color = this.colorVariants[0];
}
