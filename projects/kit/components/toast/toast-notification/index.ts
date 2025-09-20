import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk/directives/swipe';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {EMPTY, fromEvent, of, repeat, switchMap, takeUntil, timer} from 'rxjs';

import {TuiToast} from '../toast.directive';
import {TUI_TOAST_OPTIONS, type TuiToastOptions} from '../toast.options';

@Component({
    standalone: true,
    selector: 'tui-toast-notification',
    imports: [NgIf, PolymorpheusOutlet, TuiButton, TuiSwipe, TuiToast],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        role: 'status',
        '[class._mobile]': 'isMobile',
        '[attr.data-appearance]': 'item.appearance || options.appearance',
    },
})
export class TuiToastNotification<O> {
    private readonly el = tuiInjectElement();
    protected readonly isMobile = inject(TUI_IS_MOBILE);

    protected readonly item = injectContext<TuiPopover<TuiToastOptions, O>>();
    protected readonly options = inject(TUI_TOAST_OPTIONS);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    protected readonly $ = of(
        typeof this.item.autoClose === 'function'
            ? this.item.autoClose(this.item.appearance)
            : this.item.autoClose,
    )
        .pipe(
            switchMap((autoClose) => (autoClose ? timer(autoClose) : EMPTY)),
            takeUntil(fromEvent(this.el, 'mouseenter')),
            repeat({delay: () => fromEvent(this.el, 'mouseleave')}),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.item.$implicit.complete());

    protected swipe(event: TuiSwipeEvent): void {
        const closable =
            (typeof this.item.closable === 'function' && this.item.closable(event)) ||
            this.item.closable;

        if (closable) {
            this.item.$implicit.complete();
        }
    }
}
