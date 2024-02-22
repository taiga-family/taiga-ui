import {ElementRef, inject, InjectionToken, Provider} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {TuiDestroyService, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {MODE_PROVIDER} from '@taiga-ui/core';
import {EMPTY, filter, map, merge, Observable} from 'rxjs';
/**
 * Stream of tab activation events
 */
export const TUI_TAB_EVENT = new InjectionToken<Observable<Event>>('[TUI_TAB_EVENT]');
export const TUI_TAB_ACTIVATE = 'tui-tab-activate';
export const TUI_TAB_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_TAB_EVENT,
        useFactory: (): Observable<unknown> => {
            const el: HTMLElement = inject(ElementRef).nativeElement;
            const routerLinkActive = inject(RouterLinkActive, {optional: true});
            const service = inject(MutationObserverService, {optional: true});
            const mutationObserver =
                routerLinkActive &&
                service?.pipe(filter(() => routerLinkActive.isActive));

            return merge(
                mutationObserver || EMPTY,
                routerLinkActive?.isActiveChange.pipe(filter(Boolean)) || EMPTY,
                el.matches('button') ? tuiTypedFromEvent(el, 'click') : EMPTY,
            ).pipe(
                map(() =>
                    el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {bubbles: true})),
                ),
            );
        },
    },
    MODE_PROVIDER,
];
