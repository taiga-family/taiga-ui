import {ElementRef, InjectionToken, Optional, Provider} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {
    TuiDestroyService,
    TuiFocusVisibleService,
    tuiTypedFromEvent,
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
            TuiRouterLinkActiveService,
            [new Optional(), MutationObserverService],
            [new Optional(), RouterLinkActive],
        ],
        useFactory: (
            {nativeElement}: ElementRef<HTMLElement>,
            routerLinkActiveService: Observable<boolean>,
            mutationObserverService: MutationObserverService | null,
            routerLinkActive: RouterLinkActive | null,
        ): Observable<unknown> => {
            const mutationObserver =
                routerLinkActive && mutationObserverService
                    ? mutationObserverService.pipe(
                          filter(() => routerLinkActive.isActive),
                      )
                    : EMPTY;

            return merge(
                mutationObserver,
                routerLinkActiveService.pipe(filter(identity)),
                nativeElement.matches(`button`)
                    ? tuiTypedFromEvent(nativeElement, `click`)
                    : EMPTY,
            ).pipe(
                map(() =>
                    nativeElement.dispatchEvent(
                        new CustomEvent(TUI_TAB_ACTIVATE, {bubbles: true}),
                    ),
                ),
            );
        },
    },
    MODE_PROVIDER,
];
