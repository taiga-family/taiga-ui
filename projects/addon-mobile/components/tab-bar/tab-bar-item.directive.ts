import {ChangeDetectorRef, Directive, ElementRef, inject} from '@angular/core';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {TuiRouterLinkActiveService} from '@taiga-ui/core';
import {filter, takeUntil} from 'rxjs';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    selector: '[tuiTabBarItem][routerLinkActive]',
    providers: [TuiRouterLinkActiveService, TuiDestroyService],
})
export class TuiTabBarItemDirective {
    constructor() {
        const tabs = inject(TuiTabBarComponent);
        const el: HTMLElement = inject(ElementRef).nativeElement;

        inject(TuiRouterLinkActiveService)
            .pipe(
                filter(Boolean),
                tuiWatch(inject(ChangeDetectorRef)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(() => tabs.setActive(el));
    }
}
