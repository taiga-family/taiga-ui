import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Provider} from '@angular/core';
import {
    identity,
    tuiCustomEvent,
    TuiDestroyService,
    TuiFocusVisibleService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TuiRouterLinkActiveService} from '@taiga-ui/core';
import {EMPTY, merge, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

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
        deps: [ElementRef, DOCUMENT, TuiRouterLinkActiveService],
        useFactory: tabActiveFactory,
    },
    MODE_PROVIDER,
];

export function tabActiveFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    documentRef: Document,
    routerLinkActiveService: Observable<boolean>,
): Observable<unknown> {
    return merge(
        routerLinkActiveService.pipe(filter(identity)),
        nativeElement.matches('button') ? typedFromEvent(nativeElement, 'click') : EMPTY,
    ).pipe(
        map(() =>
            nativeElement.dispatchEvent(
                tuiCustomEvent(TUI_TAB_ACTIVATE, {bubbles: true}, documentRef),
            ),
        ),
    );
}
