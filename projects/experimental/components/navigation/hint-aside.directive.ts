import type {DoCheck} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core/directives/hint';

import {TuiAside} from './aside.component';

@Directive({
    standalone: true,
    selector: '[tuiHintAside]',
    providers: [tuiHintOptionsProvider({direction: 'right'})],
    hostDirectives: [TuiHintDirective],
})
export class TuiHintAside implements DoCheck {
    private readonly el = tuiInjectElement();
    private readonly aside = inject(TuiAside);
    private readonly hint = inject(TuiHintDirective);

    // TODO: switch to `tuiDirectiveBinding` when tuiNavigationAside is switched to signal
    public ngDoCheck(): void {
        this.hint.tuiHint = this.aside.tuiNavigationAside
            ? ''
            : this.el.textContent?.trim();
    }
}
