import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {EMPTY, filter, type Observable} from 'rxjs';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    selector: '[tuiTabBarItem][routerLinkActive]',
})
export class TuiTabBarItemDirective {
    constructor() {
        const tabs = inject(TuiTabBarComponent);
        const el = tuiInjectElement();
        const link: Observable<boolean> =
            inject(RouterLinkActive, {optional: true})?.isActiveChange || EMPTY;

        link.pipe(filter(Boolean), tuiWatch(), takeUntilDestroyed()).subscribe(() =>
            tabs.setActive(el),
        );
    }
}
