import {Directive, inject, Input} from '@angular/core';

import {TuiHintDirective} from './hint.directive';

@Directive({
    standalone: true,
    selector: '[tuiHintOverflow]',
    hostDirectives: [
        {
            directive: TuiHintDirective,
            inputs: ['tuiHintAppearance'],
        },
    ],
    host: {
        '(mouseenter)': 'onMouseEnter($event.currentTarget)',
    },
})
export class TuiHintOverflow {
    private readonly hint = inject(TuiHintDirective);

    @Input()
    public tuiHintOverflow: string | null = '';

    protected onMouseEnter({scrollWidth, clientWidth, textContent}: Element): void {
        this.hint.tuiHint =
            scrollWidth > clientWidth && this.tuiHintOverflow !== null
                ? this.tuiHintOverflow || textContent
                : '';
    }
}
