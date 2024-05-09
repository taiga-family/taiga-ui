import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {tuiInjectElement, tuiWatch} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {EMPTY, filter} from 'rxjs';

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

        link.pipe(
            filter(Boolean),
            tuiWatch(inject(ChangeDetectorRef)),
            takeUntilDestroyed(),
        ).subscribe(() => tabs.setActive(el));
    }
}
