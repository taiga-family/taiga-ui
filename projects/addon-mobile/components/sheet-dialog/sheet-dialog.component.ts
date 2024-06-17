import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {AfterViewInit, ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiPopover} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    TuiClickOutsideDirective,
    tuiInjectElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_SPEED,
    TUI_CLOSE_WORD,
    TUI_COMMON_ICONS,
    TuiButton,
    tuiGetDuration,
    tuiSlideInTop,
} from '@taiga-ui/core';
import {shouldCall} from '@taiga-ui/event-plugins';
import {
    POLYMORPHEUS_CONTEXT,
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
        NgForOf,
        TuiClickOutsideDirective,
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
        AsyncPipe,
    ],
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTop],
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    @ViewChild('sheet')
    private readonly sheet?: ElementRef<HTMLElement>;

    @ViewChildren('stops')
    private readonly stopsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);

    private pointers = 0;

    @HostBinding('@tuiSlideInTop')
    protected readonly slideInTop = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(this.speed),
        },
    };

    protected readonly stuck$ = new BehaviorSubject(false);

    protected readonly stuck$$ = this.stuck$
        .pipe(takeUntilDestroyed())
        .subscribe(add =>
            add ? this.el.classList.add('_stuck') : this.el.classList.remove('_stuck'),
        );

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly context =
        inject<TuiPopover<TuiSheetDialogOptions<I>, any>>(POLYMORPHEUS_CONTEXT);

    public ngAfterViewInit(): void {
        this.el.scrollTop = [...this.getStops(this.stopsRefs), this.sheetTop][
            this.context.initial
        ];
    }

    @HostBinding('style.top.px')
    protected get offset(): number {
        return this.context.offset;
    }

    @HostBinding('class._closeable')
    protected get closeable(): boolean {
        return this.context.closeable;
    }

    protected get isSmall(): boolean {
        return this.sheetTop > (this.sheet?.nativeElement.clientHeight || Infinity);
    }

    @HostListener('document:touchstart.passive.silent', ['1'])
    @HostListener('document:touchend.silent', ['-1'])
    @HostListener('document:touchcancel.silent', ['-1'])
    @HostListener('scroll.silent', ['0'])
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

    @shouldCall(isCloseable)
    protected close(): void {
        // TODO: Refactor focus visible on mobile
        this.el.dispatchEvent(new Event('mousedown', {bubbles: true}));
        this.context.$implicit.complete();
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
