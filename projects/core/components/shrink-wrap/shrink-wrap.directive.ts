import {Directive, input} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';

@Directive({
    // TODO: https://github.com/angular/angular/issues/57846
    selector: '[tuiShrinkWrap]:not([tuiToast])',
    host: {
        'data-tui-version': TUI_VERSION,
        tuiShrinkWrap: '',
        '[style.max-inline-size]':
            '`calc(${tuiShrinkWrap() || "100%"} + var(--t-shrink-wrap, 0px))`',
    },
})
export class TuiShrinkWrapDirective {
    public readonly tuiShrinkWrap = input('');
}
