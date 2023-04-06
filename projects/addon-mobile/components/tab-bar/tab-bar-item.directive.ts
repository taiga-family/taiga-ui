import {ChangeDetectorRef, Directive, ElementRef, Inject, Self} from '@angular/core';
import {TuiDestroyService, tuiWatch} from '@taiga-ui/cdk';
import {TuiRouterLinkActiveService} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

import {TuiTabBarComponent} from './tab-bar.component';

@Directive({
    selector: '[tuiTabBarItem][routerLinkActive]',
    providers: [TuiRouterLinkActiveService, TuiDestroyService],
})
export class TuiTabBarItemDirective {
    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiRouterLinkActiveService) active$: Observable<boolean>,
        @Inject(TuiTabBarComponent) tabs: TuiTabBarComponent,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        active$
            .pipe(filter(Boolean), tuiWatch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(() => {
                tabs.setActive(nativeElement);
            });
    }
}
