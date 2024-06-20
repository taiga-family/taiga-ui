import type {AfterViewInit, ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    HostListener,
    inject,
    Input,
    NgZone,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiSlideInTop} from '@taiga-ui/core/animations';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';
import {map, timer} from 'rxjs';

import type {TuiSheet, TuiSheetRequiredProps} from '../../sheet';
import {TUI_SHEET_SCROLL} from '../../sheet-tokens';
import {TUI_SHEET_ID} from '../sheet-heading/sheet-heading.component';
import {TUI_SHEET_PROVIDERS} from './sheet.providers';

@Component({
    selector: 'tui-sheet',
    templateUrl: './sheet.template.html',
    styleUrls: ['./sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_SHEET_PROVIDERS,
    host: {
        role: 'dialog',
        '[attr.aria-labelledby]': 'id',
        '[class._ios]': 'isIos',
    },
    animations: [tuiSlideInTop],
})
export class TuiSheetComponent<T> implements TuiSheetRequiredProps<T>, AfterViewInit {
    @ViewChild('sheet')
    private readonly sheet?: ElementRef<HTMLElement>;

    @ViewChild('content')
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChildren('stops')
    private readonly stopsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly destroyRef = inject(DestroyRef);
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly el = tuiInjectElement();
    private readonly zone = inject(NgZone);

    protected id = '';
    protected readonly isIos = inject(TUI_IS_IOS);
    protected readonly moreWord$ = inject(TUI_MORE_WORD);
    protected readonly stuck$ = this.scroll$.pipe(
        map(y => Math.floor(y) > this.contentTop),
    );

    protected readonly stuck$$ = this.stuck$
        .pipe(takeUntilDestroyed())
        .subscribe(add =>
            add ? this.el.classList.add('_stuck') : this.el.classList.remove('_stuck'),
        );

    @Input()
    public item!: TuiSheet<T>;

    @tuiPure
    public get context(): TuiSheet<T> {
        return {
            ...this.item,
            scroll$: this.scroll$.pipe(tuiZonefull(this.zone)),
        };
    }

    public get stops(): readonly number[] {
        return this.getStops(this.stopsRefs);
    }

    public get imageStop(): number {
        return (this.item.imageSlide && this.stops[this.stops.length - 1]) || 0;
    }

    public get imageHeight(): number {
        return this.contentTop - this.sheetTop;
    }

    public ngAfterViewInit(): void {
        this.el.scrollTop = [...this.stops, this.sheetTop, this.contentTop][
            this.item.initial
        ];
    }

    @HostListener(TUI_SHEET_ID, ['$event.detail'])
    protected onId(id: string): void {
        this.id = id;
    }

    protected scrollTo(top: number = this.sheetTop): void {
        if (this.isIos) {
            const offset = top - this.el.scrollTop - 16;

            this.el.style.transition = 'none';
            this.el.style.transform = `scaleX(-1) translate3d(0, ${offset}px, 0)`;

            timer(0)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                    this.el.style.transition = '';
                    this.el.style.transform = '';
                });
        }

        this.el.scrollTo({top, behavior: 'smooth'});
    }

    protected close(): void {
        if (this.context.closeable) {
            this.context.$implicit.complete();
        }
    }

    private get contentTop(): number {
        return this.content?.nativeElement.offsetTop ?? Infinity;
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
