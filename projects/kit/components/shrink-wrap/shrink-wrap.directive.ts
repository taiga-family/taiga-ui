import {Directive, Input} from '@angular/core';

@Directive({
    standalone: true,
    selector: '[tuiShrinkWrap]',
    host: {
        tuiShrinkWrap: '',
        '[style.max-inline-size]': 'size',
    },
})
export class TuiShrinkWrapDirective {
    @Input()
    public tuiShrinkWrap = '';

    protected get size(): string {
        return `calc(${this.tuiShrinkWrap || '100%'} + var(--t-shrink-wrap, 0px))`;
    }
}
