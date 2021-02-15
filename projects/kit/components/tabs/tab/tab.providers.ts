import {DOCUMENT} from '@angular/common';
import {ChangeDetectorRef, ElementRef, InjectionToken, Provider} from '@angular/core';
import {
    identity,
    tuiCustomEvent,
    TuiDestroyService,
    TuiFocusVisibleService,
    typedFromEvent,
    watch,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TuiRouterLinkActiveService} from '@taiga-ui/core';
import {EMPTY, merge, Observable} from 'rxjs';
import {filter, mapTo, takeUntil} from 'rxjs/operators';

export const TUI_TAB_ACTIVATE = 'tui-tab-activate';
export const TUI_TAB_EVENT = new InjectionToken<Observable<Event>>(
    'Stream of tab activation events',
);
export const TUI_TAB_PROVIDERS: Provider[] = [
    TuiDestroyService,
    TuiFocusVisibleService,
    TuiRouterLinkActiveService,
    {
        provide: TUI_TAB_EVENT,
        deps: [
            ElementRef,
            DOCUMENT,
            TuiRouterLinkActiveService,
            TuiDestroyService,
            ChangeDetectorRef,
        ],
        useFactory: tabActiveFactory,
    },
    MODE_PROVIDER,
];

export function tabActiveFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    documentRef: Document,
    routerLinkActiveService: Observable<boolean>,
    destroy$: Observable<void>,
    changeDetectorRef: ChangeDetectorRef,
): Observable<Event> {
    return merge(
        routerLinkActiveService.pipe(filter(identity)),
        nativeElement.matches('button') ? typedFromEvent(nativeElement, 'click') : EMPTY,
    ).pipe(
        takeUntil(destroy$),
        watch(changeDetectorRef),
        mapTo(tuiCustomEvent(TUI_TAB_ACTIVATE, {bubbles: true}, documentRef)),
    );
}
