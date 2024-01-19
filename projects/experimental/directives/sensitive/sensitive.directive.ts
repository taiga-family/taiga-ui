import {Directive, Inject, Input} from '@angular/core';
import {
    TuiDestroyService,
    TuiDirectiveStylesService,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {map} from 'rxjs';

import {TuiSensitiveComponent} from './sensitive.component';

const rowsInSvg = 3;

@Directive({
    selector: '[tuiSensitive]',
    providers: [TuiResizeService, TuiDestroyService],
    host: {
        '[style.--t-offset.px]': 'offset',
        '[$.style.--t-mask-height.px]': 'height$',
        '($.style.--t-mask-height.px)': 'height$',
        '[class.tui-sensitive]': 'tuiSensitive',
    },
})
export class TuiSensitiveDirective {
    @Input()
    tuiSensitive: boolean | null = false;

    readonly offset = Math.round(Math.random() * 10) * 10;
    readonly height$ = this.resize$.pipe(
        map(([entry]) => entry.contentRect.height),
        map(height => {
            const rows = Math.max(2, Math.floor(height / 16) + 1);

            return height * (rowsInSvg / rows);
        }),
    );

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(TuiResizeService) private readonly resize$: TuiResizeService,
    ) {
        directiveStyles.addComponent(TuiSensitiveComponent);
    }
}
