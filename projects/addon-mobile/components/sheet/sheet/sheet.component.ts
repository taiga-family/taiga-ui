import {
    AfterViewInit,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    NgZone,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, tuiPure, tuiZonefull, typedFromEvent} from '@taiga-ui/cdk';
import {tuiSlideInTop, tuiZonefulMap} from '@taiga-ui/core';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {merge, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {TuiSheet} from '../sheet';
import {TUI_SHEET_CLOSE} from './sheet-heading/sheet-heading.component';
import {TUI_SHEET_PROVIDERS, TUI_SHEET_SCROLL} from './sheet.providers';

// So that overlay appears a little ahead of time
const OFFSET = 16;

@Component({
    selector: 'tui-sheet',
    templateUrl: 'sheet.template.html',
    styleUrls: ['sheet.style.less'],
    providers: TUI_SHEET_PROVIDERS,
    animations: [tuiSlideInTop],
    host: {
        '[class._closeable]': 'item.closeable',
    },
})
export class TuiSheetComponent<T> implements AfterViewInit {
    @Input()
    item!: TuiSheet<T>;

    @Output()
    readonly close = merge(
        typedFromEvent(this.elementRef.nativeElement, TUI_SHEET_CLOSE),
        this.scroll$.pipe(
            filter(y => this.clickthrough && this.item.closeable && this.shouldClose(y)),
            tuiZonefull(this.ngZone),
        ),
    );

    @HostBinding('class._clickthrough')
    clickthrough = true;

    @HostBinding('$.class._overlay')
    @HostListener('$.class._overlay')
    readonly overlay$ = asCallable(
        this.scroll$.pipe(
            filter(() => !this.item.overlay),
            tuiZonefulMap(scrollTop => this.isOverlayVisible(scrollTop), this.ngZone),
        ),
    );

    readonly stuck$ = this.scroll$.pipe(
        tuiZonefulMap(scrollTop => scrollTop > this.contentTop, this.ngZone),
    );

    @ViewChild('sheet')
    private readonly sheet?: ElementRef<HTMLElement>;

    @ViewChild('content')
    private readonly content?: ElementRef<HTMLElement>;

    @ViewChildren('stops')
    private readonly stopsRefs: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    constructor(
        @Inject(TUI_SHEET_SCROLL) private readonly scroll$: Observable<number>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {}

    get stops(): readonly number[] {
        return this.getStops(this.stopsRefs);
    }

    get imageStop(): number {
        return (this.item.imageSlide && this.stops[this.stops.length - 1]) || 0;
    }

    ngAfterViewInit() {
        const stops = [...this.stops, this.sheetTop, this.contentTop];

        this.elementRef.nativeElement.scrollTop = stops[this.item.initial];
    }

    onTouched(clickthrough: boolean) {
        this.clickthrough = clickthrough;
    }

    scrollTo(top: number = this.sheetTop) {
        this.elementRef.nativeElement.scrollTo({top, behavior: 'smooth'});
    }

    private get contentTop(): number {
        return this.content?.nativeElement.offsetTop ?? Infinity;
    }

    private get sheetTop(): number {
        return this.sheet?.nativeElement.offsetTop ?? Infinity;
    }

    private isOverlayVisible(scrollTop: number): boolean {
        return scrollTop + OFFSET > this.sheetTop;
    }

    private shouldClose(scrollTop: number): boolean {
        const min = Math.min(
            this.elementRef.nativeElement.clientHeight,
            this.sheet?.nativeElement.clientHeight || Infinity,
            this.stops[0] || Infinity,
        );

        return scrollTop < min / 2;
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
