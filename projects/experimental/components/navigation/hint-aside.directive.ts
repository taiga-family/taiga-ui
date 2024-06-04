import type {DoCheck} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {TuiHintDirective, tuiHintOptionsProvider} from '@taiga-ui/core';

import {TuiAsideComponent} from './aside.component';

@Directive({
    selector: '[tuiHintAside]',
    hostDirectives: [TuiHintDirective],
    providers: [tuiHintOptionsProvider({direction: 'right'})],
})
export class TuiHintAsideDirective implements DoCheck {
    private readonly el = tuiInjectElement();
    private readonly aside = inject(TuiAsideComponent);
    private readonly hint = inject(TuiHintDirective);

    // TODO: switch to `tuiDirectiveBinding` when tuiNavigationAside is switched to signal
    public ngDoCheck(): void {
        this.hint.tuiHint = this.aside.tuiNavigationAside
            ? ''
            : this.el.textContent?.trim();
    }
}
