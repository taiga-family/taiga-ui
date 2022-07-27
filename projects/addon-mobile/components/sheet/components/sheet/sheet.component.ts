import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    NgZone,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, TUI_IS_IOS, tuiPure, tuiZonefull} from '@taiga-ui/cdk';
import {tuiSlideInTop} from '@taiga-ui/core';
import {TUI_MORE_WORD} from '@taiga-ui/kit';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {fakeSmoothScroll} from '../../ios.hacks';
import {TuiSheet, TuiSheetRequiredProps} from '../../sheet';
import {TUI_SHEET_SCROLL} from '../../sheet-tokens';
import {TUI_SHEET_ID} from '../sheet-heading/sheet-heading.component';
import {TUI_SHEET_PROVIDERS} from './sheet.providers';

// @dynamic
@Component({
    selector: `tui-sheet`,
    templateUrl: `sheet.template.html`,
    styleUrls: [`sheet.style.less`],
    providers: TUI_SHEET_PROVIDERS,
    animations: [tuiSlideInTop],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        role: `dialog`,
        '[attr.aria-labelledby]': `id`,
        '[class._ios]': `isIos`,
        // '[class._stuck]': 'true', // Initially disable snapping for Firefox
        '[$.class._stuck]': `stuck$`,
        '($.class._stuck)': `stuck$`,
    },
})
export class TuiSheetComponent<T> implements TuiSheetRequiredProps<T>, AfterViewInit {
    @ViewChild(`sheet`)
    private readonly sheet?: ElementRef<HTMLElement>;

    @ViewChild(`content`)
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChildren(`stops`)
    private readonly stopsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    item!: TuiSheet<T>;

    id = ``;

    readonly stuck$ = this.scroll$.pipe(map(y => Math.floor(y) > this.contentTop));

    constructor(
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TUI_IS_IOS) readonly isIos: boolean,
        @Inject(TUI_MORE_WORD) readonly moreWord$: Observable<string>,
    ) {}

    get stops(): readonly number[] {
        return this.getStops(this.stopsRefs);
    }

    get imageStop(): number {
        return (this.item.imageSlide && this.stops[this.stops.length - 1]) || 0;
    }

    get imageHeight(): number {
        return this.contentTop - this.sheetTop;
    }

    @tuiPure
    get context(): TuiSheet<T> {
        return {
            ...this.item,
            scroll$: this.scroll$.pipe(tuiZonefull(this.ngZone)),
        };
    }

    @HostListener(TUI_SHEET_ID, [`$event.detail`])
    onId(id: string): void {
        this.id = id;
    }

    ngAfterViewInit(): void {
        const stops = [...this.stops, this.sheetTop, this.contentTop];

        this.elementRef.nativeElement.scrollTop = stops[this.item.initial];
    }

    scrollTo(top: number = this.sheetTop): void {
        const {nativeElement} = this.elementRef;

        if (this.isIos) {
            fakeSmoothScroll(nativeElement, top - nativeElement.scrollTop - 16);
        }

        nativeElement.scrollTo({top, behavior: `smooth`});
    }

    close(): void {
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
        return stops
            .toArray()
            .map(
                ({nativeElement}) => nativeElement.offsetTop + nativeElement.clientHeight,
            );
    }
}
