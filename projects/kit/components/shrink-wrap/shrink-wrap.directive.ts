import {Directive, input} from '@angular/core';

@Directive({
    selector: '[tuiShrinkWrap]',
    host: {
        tuiShrinkWrap: '',
        '[style.max-inline-size]':
            '`calc(${tuiShrinkWrap() || "100%"} + var(--t-shrink-wrap, 0px))`',
    },
})
export class TuiShrinkWrapDirective {
    public readonly tuiShrinkWrap = input('');
}
