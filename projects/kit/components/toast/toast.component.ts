import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiSwipe} from '@taiga-ui/cdk/directives/swipe';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {EMPTY, fromEvent, of, repeat, switchMap, takeUntil, timer} from 'rxjs';

import {TuiToastDirective} from './toast.directive';
import {type TuiToastOptions} from './toast.options';

@Component({
    selector: 'tui-toast',
    imports: [PolymorpheusOutlet, TuiButton, TuiSwipe, TuiToastDirective],
    templateUrl: './toast.template.html',
    styleUrls: ['./toast.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated],
    host: {
        role: 'status',
        '[class._mobile]': 'isMobile',
        '[attr.data-appearance]': 'context.appearance',
    },
})
export class TuiToastComponent<O, I> implements AfterViewInit {
    private readonly close = viewChild(TuiButton, {read: ElementRef});

    private readonly el = tuiInjectElement();

    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly context = injectContext<TuiPopover<TuiToastOptions<I>, O>>();
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly $ = of(this.context.autoClose)
        .pipe(
            switchMap((autoClose) => (autoClose ? timer(autoClose) : EMPTY)),
            takeUntil(fromEvent(this.el, 'mouseenter')),
            repeat({delay: () => fromEvent(this.el, 'mouseleave')}),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.context.$implicit.complete());

    public ngAfterViewInit(): void {
        if (this.close()) {
            this.el.querySelector('[tuiToast]')?.appendChild(this.close()?.nativeElement);
        }
    }

    protected onSwipe(): void {
        if (this.context.closable) {
            this.context.$implicit.complete();
        }
    }
}
