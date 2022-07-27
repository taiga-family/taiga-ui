import {DOCUMENT} from '@angular/common';
import {ElementRef, InjectionToken, Optional, Provider} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {
    tuiCustomEvent,
    TuiDestroyService,
    TuiFocusVisibleService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TuiRouterLinkActiveService} from '@taiga-ui/core';
import {EMPTY, identity, merge, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export const TUI_TAB_ACTIVATE = `tui-tab-activate`;
export const TUI_TAB_EVENT = new InjectionToken<Observable<Event>>(
    `Stream of tab activation events`,
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
            [new Optional(), MutationObserverService],
            [new Optional(), RouterLinkActive],
        ],
        useFactory: tabActiveFactory,
    },
    MODE_PROVIDER,
];

// eslint-disable-next-line @typescript-eslint/naming-convention
export function tabActiveFactory(
    {nativeElement}: ElementRef<HTMLElement>,
    documentRef: Document,
    routerLinkActiveService: Observable<boolean>,
    mutationObserverService: MutationObserverService | null,
    routerLinkActive: RouterLinkActive | null,
): Observable<unknown> {
    const mutationObserver =
        routerLinkActive && mutationObserverService
            ? mutationObserverService.pipe(filter(() => routerLinkActive.isActive))
            : EMPTY;

    return merge(
        mutationObserver,
        routerLinkActiveService.pipe(filter(identity)),
        nativeElement.matches(`button`) ? typedFromEvent(nativeElement, `click`) : EMPTY,
    ).pipe(
        map(() =>
            nativeElement.dispatchEvent(
                tuiCustomEvent(TUI_TAB_ACTIVATE, {bubbles: true}, documentRef),
            ),
        ),
    );
}
