import {DestroyRef, Directive, inject} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {EMPTY} from 'rxjs';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    selector: '[tuiTabBarItem][routerLinkActive]',
})
export class TuiTabBarItemDirective {
    constructor() {
        const tabs = inject(TuiTabBarComponent);
        const el = tuiInjectElement();
        const link = inject(RouterLinkActive, {optional: true})?.isActiveChange || EMPTY;
        const sub = link.subscribe((value) => {
            if (value) {
                tabs.setActive(el);
            }
        });

        inject(DestroyRef).onDestroy(() => sub.unsubscribe());
    }
}
