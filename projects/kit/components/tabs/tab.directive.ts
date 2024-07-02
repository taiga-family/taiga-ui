import type {OnDestroy} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';
import {EMPTY, filter, merge} from 'rxjs';

export const TUI_TAB_ACTIVATE = 'tui-tab-activate';

@Directive({
    standalone: true,
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
    private readonly observer =
        this.rla &&
        inject(MutationObserverService, {optional: true})?.pipe(
            filter(() => !!this.rla?.isActive),
        );

    protected readonly sub = merge(
        this.observer || EMPTY,
        this.rla?.isActiveChange.pipe(filter(Boolean)) || EMPTY,
        this.el.matches('button') ? tuiTypedFromEvent(this.el, 'click') : EMPTY,
    )
        .pipe(takeUntilDestroyed())
        .subscribe(() =>
            this.el.dispatchEvent(new CustomEvent(TUI_TAB_ACTIVATE, {bubbles: true})),
        );

    public ngOnDestroy(): void {
        if (tuiIsNativeFocused(this.el)) {
            this.el.blur();
        }
    }
}
