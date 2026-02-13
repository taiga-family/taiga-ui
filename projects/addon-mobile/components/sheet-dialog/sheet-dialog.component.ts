import {NgForOf, NgIf} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    type QueryList,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiCloseWatcher, tuiZonefull} from '@taiga-ui/cdk/observables';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_DIALOGS_CLOSE} from '@taiga-ui/core/components/dialog';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {exhaustMap, filter, isObservable, map, merge, of, Subject, take} from 'rxjs';

import {type TuiSheetDialogOptions} from './sheet-dialog.options';

const REQUIRED_ERROR = new Error(ngDevMode ? 'Required dialog was dismissed' : '');

@Component({
    standalone: true,
    selector: 'tui-sheet-dialog',
    imports: [NgForOf, NgIf, PolymorpheusOutlet, TuiButton],
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-appearance]': 'context.appearance',
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
    protected readonly $ = merge(
        this.close$,
        tuiCloseWatcher(),
        inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER)),
    )
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
        .subscribe(() => this.close());

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
        if (!this.context.closeable) {
            return 0;
        }

        return (
            this.stops
                .map((e) => e.nativeElement.offsetTop - this.context.offset)
                .concat(this.el.clientHeight ?? Infinity)[this.context.initial] ?? 0
        );
    }

    private close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
