import {ChangeDetectorRef, Directive, ElementRef, inject} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {EMPTY, filter, takeUntil} from 'rxjs';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    selector: '[tuiTabBarItem][routerLinkActive]',
    providers: [TuiDestroyService],
})
export class TuiTabBarItemDirective {
    constructor() {
        const tabs = inject(TuiTabBarComponent);
        const el: HTMLElement = inject(ElementRef).nativeElement;
        const link: Observable<boolean> =
            inject(RouterLinkActive, {optional: true})?.isActiveChange || EMPTY;

        link.pipe(
            filter(Boolean),
            tuiWatch(inject(ChangeDetectorRef)),
            takeUntil(inject(TuiDestroyService, {self: true})),
        ).subscribe(() => tabs.setActive(el));
    }
}
