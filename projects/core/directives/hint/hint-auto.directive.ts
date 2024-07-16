import {Directive} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {fromEvent, map} from 'rxjs';

import {TuiHintDirective} from './hint.directive';

@Directive({
    standalone: true,
    selector: '[tuiHintAuto]',
    hostDirectives: [
        {
            directive: TuiHintDirective,
            inputs: ['tuiHintAppearance'],
        },
    ],
})
export class TuiHintAuto {
    private readonly el = tuiInjectElement();

    protected readonly binding = tuiDirectiveBinding(
        TuiHintDirective,
        'tuiHint',
        toSignal(fromEvent(this.el, 'mouseenter').pipe(map(() => this.content))),
    );

    private get content(): string | null {
        return this.el.scrollWidth > this.el.clientWidth ? this.el.textContent : '';
    }
}
