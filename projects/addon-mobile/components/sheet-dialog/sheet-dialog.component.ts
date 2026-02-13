import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    viewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiCloseWatcher, tuiZonefull} from '@taiga-ui/cdk/observables';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TUI_SCROLL_REF} from '@taiga-ui/core/components/scrollbar';
import {TUI_DIALOGS_CLOSE} from '@taiga-ui/core/portals/dialog';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {exhaustMap, filter, isObservable, map, merge, of, Subject, take} from 'rxjs';

import {type TuiSheetDialogOptions} from './sheet-dialog.options';

const REQUIRED_ERROR = new Error(ngDevMode ? 'Required dialog was dismissed' : '');

@Component({
    selector: 'tui-sheet-dialog',
    imports: [PolymorpheusOutlet, TuiButton],
    templateUrl: './sheet-dialog.template.html',
    styleUrl: './sheet-dialog.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    hostDirectives: [TuiAnimated],
    host: {
        '[attr.data-appearance]': 'context.appearance',
        '[style.--tui-offset.px]': 'context.offset',
        '[class._bar]': 'context.bar',
        '[class._closeable]': 'context.closable',
        '(document:touchstart.passive.zoneless)': 'onPointerChange(1)',
        '(document:touchend.zoneless)': 'onPointerChange(-1)',
        '(document:touchcancel.zoneless)': 'onPointerChange(-1)',
        '(scroll.zoneless)': 'onPointerChange(0)',
        '(click.self)': 'close$.next()',
    },
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    private readonly stops = viewChildren('stops', {read: ElementRef});
    private readonly el = tuiInjectElement();
    private pointers = 0;

    protected readonly context =
        injectContext<TuiPortalContext<TuiSheetDialogOptions<I>, any>>();

    protected readonly close$ = new Subject<void>();
    protected readonly $ = merge(
        this.close$,
        tuiCloseWatcher(),
        inject(TUI_DIALOGS_CLOSE).pipe(map(TUI_TRUE_HANDLER)),
    )
        .pipe(
            tuiZonefull(),
            exhaustMap(() => {
                if (isObservable(this.context.closable)) {
                    if (this.el.scrollTop <= 0) {
                        this.el.scrollTo({top: this.initial, behavior: 'smooth'});
                    }

                    return this.context.closable.pipe(take(1));
                }

                return of(this.context.closable);
            }),
            filter(Boolean),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.close());

    public ngAfterViewInit(): void {
        this.el.scrollTop = this.initial || 0;
    }

    protected onPointerChange(delta: number): void {
        this.pointers = Math.max(this.pointers + delta, 0);

        if (!this.pointers && this.el.scrollTop <= 0) {
            this.close$.next();
        }
    }

    private get initial(): number | undefined {
        return this.context.closable
            ? this.stops()
                  .map((e) => e.nativeElement.offsetTop - this.context.offset)
                  .concat(this.el.clientHeight ?? Infinity)[this.context.initial]
            : 0;
    }

    private close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
