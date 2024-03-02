import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
    NgZone,
    type QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TUI_IS_IOS,
    TuiDestroyService,
    tuiPure,
    tuiZonefull,
} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {TUI_MORE_WORD} from '@taiga-ui/kit';
import {map, takeUntil, timer} from 'rxjs';

import {type TuiSheet, type TuiSheetRequiredProps} from '../../sheet';
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
        // '[class._stuck]': 'true', // Initially disable snapping for Firefox
        '[$.class._stuck]': 'stuck$',
        '($.class._stuck)': 'stuck$',
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

    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly scroll$ = inject(TUI_SHEET_SCROLL);
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly zone = inject(NgZone);

    @Input()
    public item!: TuiSheet<T>;

    protected id = '';

    protected readonly isIos = inject(TUI_IS_IOS);
    protected readonly moreWord$ = inject(TUI_MORE_WORD);

    protected readonly stuck$ = this.scroll$.pipe(
        map(y => Math.floor(y) > this.contentTop),
    );

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
                .pipe(takeUntil(this.destroy$))
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
