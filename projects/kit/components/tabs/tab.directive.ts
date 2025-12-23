import {Directive, inject, type OnDestroy} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {WaMutationObserverService} from '@ng-web-apis/mutation-observer';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {EMPTY, filter, merge, Subject, switchMap, take, tap} from 'rxjs';

export const TUI_TAB_ACTIVATE = 'tui-tab-activate';

@Directive({
    selector:
        'a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]',
    hostDirectives: [TuiWithIcons],
    host: {
        type: 'button',
    },
})
export class TuiTab implements OnDestroy {
    private readonly el = tuiInjectElement();
    private readonly rla = inject(RouterLinkActive, {optional: true});
    private readonly destroy$ = new Subject<void>();
    private readonly observer =
        this.rla &&
        inject(WaMutationObserverService, {optional: true})?.pipe(
            filter(() => !!this.rla?.isActive),
        );

    constructor() {
        let parent = this.el.parentElement!;

        merge(
            this.observer || EMPTY,
            this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY,
            this.el.matches('button')
                ? tuiTypedFromEvent(this.el, 'click').pipe(
                      tap(() => {
                          parent = this.el.parentElement!;
                      }),
                      // Delaying execution until after all other click callbacks
                      switchMap(() =>
                          merge(tuiTypedFromEvent(parent, 'click'), this.destroy$).pipe(
                              take(1),
                          ),
                      ),
                  )
                : EMPTY,
        )
            .pipe(takeUntilDestroyed())
            .subscribe(() => {
                const el = this.el.isConnected ? this.el : parent;

                el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {bubbles: true}));
            });
    }

    public ngOnDestroy(): void {
        this.destroy$.next();

        if (tuiIsFocused(this.el)) {
            this.el.blur();
        }
    }
}
