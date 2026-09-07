import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    viewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiCloseWatcher, tuiZonefull} from '@taiga-ui/cdk/observables';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {TUI_DIALOGS_CLOSE} from '@taiga-ui/core/portals/dialog';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {exhaustMap, filter, isObservable, map, merge, of, Subject, take} from 'rxjs';

import {type TuiSheetDialogOptions} from './sheet-dialog.options';

const REQUIRED_ERROR = new Error(ngDevMode ? 'Required dialog was dismissed' : '');

@Component({
    selector: 'tui-sheet-dialog',
    imports: [PolymorpheusOutlet, TuiButton, WaResizeObserver],
    templateUrl: './sheet-dialog.template.html',
    styleUrl: './sheet-dialog.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiAnimated, TuiScrollRef],
    host: {
        '[attr.data-appearance]': 'context.appearance',
        '[class._bar]': 'context.bar',
        '[class._closeable]': 'context.closable',
        '[style.--tui-offset.px]': 'context.offset',
        '(click.self)': 'close$.next()',
        '(document:touchcancel.zoneless)': 'onTouchEnd()',
        '(document:touchend.zoneless)': 'onTouchEnd()',
        '(document:touchstart.passive.zoneless)': 'onTouchStart()',
        '(scroll.zoneless)': 'onScroll()',
        '(wheel.passive.zoneless)': 'interacted = true',
    },
})
export class TuiSheetDialogComponent<I> {
    private readonly stops = viewChildren('stops', {read: ElementRef});
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);
    private firstStop = 0;
    private lastScrollDelta = Number.NaN;
    private lastScrollTop = Number.NaN;
    private pointers = 0;
    private startScrollTop = Number.NaN;

    protected readonly context =
        injectContext<TuiPortalContext<TuiSheetDialogOptions<I>, any>>();

    protected readonly close$ = new Subject<void>();
    protected interacted = false;

    protected readonly $ = merge(
        this.close$,
        tuiCloseWatcher(),
        inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER)),
    )
        .pipe(
            tuiZonefull(),
            exhaustMap(() => {
                if (isObservable(this.context.closable)) {
                    if (this.el.scrollTop < this.initial) {
                        this.el.scrollTo({top: this.initial, behavior: 'smooth'});
                    }

                    return this.context.closable.pipe(take(1));
                }

                return of(this.context.closable);
            }),
            filter(Boolean),
            takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => this.close());

    constructor() {
        afterNextRender(() => this.onResize());
    }

    // Re-pin async content to the initial snap; mandatory scroll-snap jumps to the bottom otherwise.
    protected onResize(): void {
        if (!this.interacted) {
            this.el.scrollTop = this.initial;
        }
    }

    protected onTouchStart(): void {
        this.interacted = true;

        if (!this.pointers) {
            this.resetScrollTracking();
            this.startScrollTop = this.el.scrollTop;
            this.firstStop = this.getFirstStop();
        }

        this.pointers += 1;
    }

    protected onTouchEnd(): void {
        this.pointers = Math.max(this.pointers - 1, 0);

        if (this.pointers) {
            return;
        }

        if (this.el.scrollTop <= 0) {
            this.close$.next();
        } else if (this.startScrollTop > this.el.scrollTop) {
            this.lastScrollTop = this.el.scrollTop;
        } else {
            this.resetScrollTracking();
        }
    }

    protected onScroll(): void {
        if (this.pointers) {
            return;
        }

        const scrollTop = this.el.scrollTop;

        if (scrollTop <= 0) {
            this.close$.next();

            return;
        }

        if (Number.isNaN(this.lastScrollTop)) {
            return;
        }

        const delta = this.lastScrollTop - scrollTop;
        const isSlowingDown =
            !Number.isNaN(this.lastScrollDelta) && delta < this.lastScrollDelta;

        if (delta <= 0 || isSlowingDown) {
            this.resetScrollTracking();

            return;
        }

        if (scrollTop < this.firstStop && !Number.isNaN(this.lastScrollDelta)) {
            this.close$.next();

            return;
        }

        this.lastScrollTop = scrollTop;
        this.lastScrollDelta = delta;
    }

    private get initial(): number {
        return this.context.closable
            ? this.stops()
                  .map((e) => e.nativeElement.offsetTop - this.context.offset)
                  .concat(this.el.clientHeight ?? Infinity)[this.context.initial] || 0
            : 0;
    }

    private getFirstStop(): number {
        return Math.max(
            0,
            Math.min(
                ...this.stops().map(
                    (e) => e.nativeElement.offsetTop - this.context.offset,
                ),
                this.el.clientHeight,
            ),
        );
    }

    private resetScrollTracking(): void {
        this.lastScrollDelta = Number.NaN;
        this.lastScrollTop = Number.NaN;
    }

    private close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
