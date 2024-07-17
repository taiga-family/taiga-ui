import {Directive, inject} from '@angular/core';

import {TuiHintDirective} from './hint.directive';

@Directive({
    standalone: true,
    selector: '[tuiHintOverflow]',
    host: {
        '(mouseenter)': 'onMouseEnter($event.currentTarget)',
    },
    hostDirectives: [
        {
            directive: TuiHintDirective,
            inputs: ['tuiHintAppearance'],
        },
    ],
})
export class TuiHintOverflow {
    private readonly hint = inject(TuiHintDirective);

    protected onMouseEnter({scrollWidth, clientWidth, textContent}: Element): void {
        this.hint.tuiHint = scrollWidth > clientWidth ? textContent : '';
    }
}
