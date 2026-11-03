import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    viewChild,
    viewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiCloseWatcher, tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {TUI_DIALOGS_CLOSE} from '@taiga-ui/core/portals/dialog';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {exhaustMap, filter, isObservable, map, merge, of, Subject, take} from 'rxjs';

import {type TuiSheetDialogContext} from './sheet-dialog.options';
import {TuiSheetDialogClose} from './sheet-dialog-close.directive';

const REQUIRED_ERROR = new Error(ngDevMode ? 'Required dialog was dismissed' : '');

@Component({
    selector: 'tui-sheet-dialog',
    imports: [PolymorpheusOutlet, TuiButton, WaResizeObserver],
    templateUrl: './sheet-dialog.template.html',
    styleUrl: './sheet-dialog.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        TuiAnimated,
        TuiScrollRef,
        {directive: TuiSheetDialogClose, outputs: ['tuiSheetDialogClose']},
    ],
    host: {
        '[attr.data-appearance]': 'context.appearance',
        '[class._bar]': 'context.bar',
        '[class._closeable]': 'context.closable',
        '[style.--tui-offset.px]': 'context.offset',
        '(click.self)': 'close$.next()',
        '(document:touchstart.passive.zoneless)': 'interacted = true',
        '(tuiSheetDialogClose)': 'close$.next()',
        '(wheel.passive.zoneless)': 'interacted = true',
    },
})
export class TuiSheetDialogComponent {
    private readonly stops = viewChildren('stops', {read: ElementRef});
    private readonly sheet = viewChild('sheet', {read: ElementRef});
    private readonly el = tuiInjectElement();
    private ready = false;
    private pending: {index: number; behavior: ScrollBehavior} | null = null;

    protected readonly context = injectContext<TuiSheetDialogContext>();
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

    constructor() {
        Object.assign(this.context, {scrollTo: this.scrollTo.bind(this)});
        afterNextRender(() => {
            this.ready = true;

            if (this.pending) {
                this.scrollTo(this.pending.index, this.pending.behavior);
                this.pending = null;
            } else {
                this.onResize();
            }
        });
    }

    public get initial(): number {
        return this.context.closable ? this.getTop(this.context.initial) : 0;
    }

    public scrollTo(index: number, behavior: ScrollBehavior = 'smooth'): void {
        if (!this.ready) {
            this.pending = {index, behavior};

            return;
        }

        // An explicit position must survive content resize, unlike the initial snap
        this.interacted = true;
        this.el.scrollTo({top: this.getTop(index), behavior});
    }

    // Re-pin async content to the initial snap; mandatory scroll-snap jumps to the bottom otherwise.
    protected onResize(): void {
        this.el.scrollTop = this.interacted ? this.el.scrollTop : this.initial;
    }

    private close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }

    // Stops are followed by the sheet content top, so index `stops.length` expands the sheet
    private getTop(index: number): number {
        const tops = this.stops().map(({nativeElement}) => nativeElement.offsetTop);
        const top = this.sheet()?.nativeElement.offsetTop ?? 0;

        return tops.concat(top)[Math.min(Math.max(index, 0), tops.length)] ?? 0;
    }
}
