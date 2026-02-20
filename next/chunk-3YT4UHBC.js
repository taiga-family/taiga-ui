import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink, type TuiSizeXXL, type TuiSizeXXS, TuiTitle} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider, TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiLink, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({min: 0})],
})
export default class Page {
    protected value = 6;
    protected max = 10;
    protected arc = false;
    protected thickness = 6;

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
        'var(--tui-background-accent-1)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'url(#gradient)',
    ];

    protected color = this.colorVariants[0]!;
}
`;export{i as default};
