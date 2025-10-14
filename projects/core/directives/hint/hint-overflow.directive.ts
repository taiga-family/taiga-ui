import {Directive, inject, input} from '@angular/core';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiHintDirective} from './hint.directive';

@Directive({
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

    public readonly content = input<string | null>('', {alias: 'tuiHintOverflow'});

    protected onMouseEnter({scrollWidth, clientWidth, textContent}: Element): void {
        tuiSetSignal(
            this.hint.content,
            scrollWidth > clientWidth && this.content() !== null
                ? this.content() || textContent
                : '',
        );
    }
}
