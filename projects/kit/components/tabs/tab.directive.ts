import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {tuiIsNativeFocused, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TuiIconsDirective} from '@taiga-ui/core';
import {EMPTY, filter, merge} from 'rxjs';

export const TUI_TAB_ACTIVATE = 'tui-tab-activate';

@Directive({
    standalone: true,
    selector:
        'a[tuiTab]:not([routerLink]), a[tuiTab][routerLink][routerLinkActive], button[tuiTab]',
    hostDirectives: [
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    host: {
        type: 'button',
    },
})
export class TuiTabDirective implements OnDestroy {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
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
