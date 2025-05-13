import {Directive, inject, Renderer2} from '@angular/core';
import {
    provideMutationObserverInit,
    WaMutationObserver,
} from '@ng-web-apis/mutation-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TUI_ENTER, TUI_LEAVE, TuiAnimated} from './animated.directive';

@Directive({
    standalone: true,
    selector: '[tuiAnimatedParent]',
    providers: [provideMutationObserverInit({childList: true})],
    host: {
        '(waMutationObserver)': 'handle()',
    },
    hostDirectives: [
        TuiAnimated,
        {
            directive: WaMutationObserver,
            outputs: ['waMutationObserver'],
        },
    ],
})
export class TuiAnimatedParent {
    private readonly el = tuiInjectElement();
    private readonly renderer = inject(Renderer2);

    protected handle(): void {
        this.el.classList.remove(TUI_ENTER);
        this.renderer.data[TUI_LEAVE] = Array.from(this.el.children);
    }
}
