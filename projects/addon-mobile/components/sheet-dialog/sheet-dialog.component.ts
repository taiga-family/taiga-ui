import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {AfterViewInit, ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiClickOutside} from '@taiga-ui/cdk/directives/click-outside';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@taiga-ui/event-plugins';
import {
    injectContext,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {BehaviorSubject} from 'rxjs';

import type {TuiSheetDialogOptions} from './sheet-dialog.options';

// So we re-enter ngZone and trigger change detection
function isCloseable(this: TuiSheetDialogComponent<unknown>): boolean {
    return this.context.closeable;
}

@Component({
    standalone: true,
    selector: 'tui-sheet-dialog',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
        TuiClickOutside,
    ],
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
    host: {
        '[@tuiSlideInTop]': 'slideInTop',
        '[style.top.px]': 'offset',
        '[class._closeable]': 'closeable',
        '(document:touchstart.passive.silent)': 'onPointerChange(1)',
        '(document:touchend.silent)': 'onPointerChange(-1)',
        '(document:touchcancel.silent)': 'onPointerChange(-1)',
        '(scroll.silent)': 'onPointerChange(0)',
    },
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    @ViewChild('sheet')
    private readonly sheet?: ElementRef<HTMLElement>;

    @ViewChildren('stops')
    private readonly stopsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();
    private pointers = 0;

    protected readonly slideInTop = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };

    protected readonly stuck$ = new BehaviorSubject(false);

    protected readonly stuck$$ = this.stuck$
        .pipe(takeUntilDestroyed())
        .subscribe((add) =>
            add ? this.el.classList.add('_stuck') : this.el.classList.remove('_stuck'),
        );

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly context =
        injectContext<TuiPopover<TuiSheetDialogOptions<I>, any>>();

    public ngAfterViewInit(): void {
        this.el.scrollTop =
            [...this.getStops(this.stopsRefs), this.sheetTop][this.context.initial] ?? 0;
    }

    protected get offset(): number {
        return this.context.offset;
    }

    protected get closeable(): boolean {
        return this.context.closeable;
    }

    protected get isSmall(): boolean {
        return this.sheetTop > (this.sheet?.nativeElement.clientHeight || Infinity);
    }

    @shouldCall(isCloseable)
    protected close(): void {
        // TODO: Refactor focus visible on mobile
        this.el.dispatchEvent(new Event('mousedown', {bubbles: true}));
        this.context.$implicit.complete();
    }

    protected onPointerChange(delta: number): void {
        this.pointers += delta;

        if (!delta) {
            const stuck = this.el.scrollTop > this.sheetTop;

            this.stuck$.value !== stuck && this.stuck$.next(stuck);
        }

        if (this.context.closeable && !this.pointers && !this.el.scrollTop) {
            this.close();
        }
    }

    private get sheetTop(): number {
        return this.sheet?.nativeElement.offsetTop ?? Infinity;
    }

    @tuiPure
    private getStops(stops: QueryList<ElementRef<HTMLElement>>): readonly number[] {
        return stops.map(
            ({nativeElement}) => nativeElement.offsetTop + nativeElement.clientHeight,
        );
    }
}
