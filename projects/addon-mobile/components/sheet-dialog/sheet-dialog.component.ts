import {NgForOf, NgIf} from '@angular/common';
import type {AfterViewInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiCloseWatcher, tuiZonefull} from '@taiga-ui/cdk/observables';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {exhaustMap, filter, isObservable, merge, of, Subject, take} from 'rxjs';

import type {TuiSheetDialogOptions} from './sheet-dialog.options';

@Component({
    standalone: true,
    selector: 'tui-sheet-dialog',
    imports: [NgForOf, NgIf, PolymorpheusOutlet],
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiAnimated],
    host: {
        '[style.--tui-offset.px]': 'context.offset',
        '[class._closeable]': 'context.closeable',
        '[class._fullscreen]': 'context.fullscreen === true',
        '(document:touchstart.passive.zoneless)': 'onPointerChange(1)',
        '(document:touchend.zoneless)': 'onPointerChange(-1)',
        '(document:touchcancel.zoneless)': 'onPointerChange(-1)',
        '(scroll.zoneless)': 'onPointerChange(0)',
        '(click.self)': 'close$.next()',
    },
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    @ViewChildren('stops')
    private readonly stops: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();
    private pointers = 0;

    protected readonly context =
        injectContext<TuiPopover<TuiSheetDialogOptions<I>, any>>();

    protected readonly close$ = new Subject<void>();
    protected readonly $ = merge(this.close$, tuiCloseWatcher())
        .pipe(
            tuiZonefull(),
            exhaustMap(() => {
                if (isObservable(this.context.closeable)) {
                    if (this.el.scrollTop <= 0) {
                        this.el.scrollTo({top: this.initial, behavior: 'smooth'});
                    }

                    return this.context.closeable.pipe(take(1));
                }

                return of(this.context.closeable);
            }),
            filter(Boolean),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.context.$implicit.complete());

    public ngAfterViewInit(): void {
        this.el.scrollTop = this.initial;
    }

    protected onPointerChange(delta: number): void {
        this.pointers = Math.max(this.pointers + delta, 0);

        if (!this.pointers && this.el.scrollTop <= 0) {
            this.close$.next();
        }
    }

    private get initial(): number {
        return (
            this.stops
                .map((e) => e.nativeElement.offsetTop - this.context.offset)
                .concat(this.el.clientHeight ?? Infinity)[this.context.initial] ?? 0
        );
    }
}
