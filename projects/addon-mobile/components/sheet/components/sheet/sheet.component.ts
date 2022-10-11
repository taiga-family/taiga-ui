import {DOCUMENT} from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Input,
    NgZone,
    Provider,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TUI_IS_IOS,
    tuiPure,
    tuiTypedFromEvent,
    tuiZonefree,
    tuiZonefull,
} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF, tuiSlideInTop} from '@taiga-ui/core';
import {TUI_MORE_WORD} from '@taiga-ui/kit';
import {merge, Observable} from 'rxjs';
import {map, mapTo, share} from 'rxjs/operators';

import {fakeSmoothScroll, iosScrollFactory} from '../../ios.hacks';
import {TuiSheet, TuiSheetRequiredProps} from '../../sheet';
import {TUI_SHEET, TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';
import {TUI_SHEET_ID} from '../sheet-heading/sheet-heading.component';

/**
 * sheet.providers.ts -> sheet.component.ts -> sheet.providers.ts
 */
export const TUI_SHEET_PROVIDERS: Provider[] = [
    {
        provide: TUI_SHEET_DRAGGED,
        deps: [ElementRef],
        useFactory: ({nativeElement}: ElementRef<HTMLElement>): Observable<boolean> => {
            return merge(
                tuiTypedFromEvent(nativeElement, `touchstart`, {passive: true}).pipe(
                    mapTo(true),
                ),
                tuiTypedFromEvent(nativeElement, `touchend`).pipe(mapTo(false)),
            );
        },
    },
    {
        provide: TUI_SHEET_SCROLL,
        deps: [ElementRef, NgZone, DOCUMENT, TUI_IS_IOS],
        useFactory: (
            {nativeElement}: ElementRef<HTMLElement>,
            ngZone: NgZone,
            documentRef: Document,
            isIos: boolean,
        ): Observable<number> => {
            return isIos
                ? iosScrollFactory(nativeElement, documentRef, ngZone)
                : merge(
                      tuiTypedFromEvent(nativeElement, `scroll`),
                      tuiTypedFromEvent(nativeElement, `load`, {capture: true}),
                  ).pipe(
                      map(() => nativeElement.scrollTop),
                      tuiZonefree(ngZone),
                      share(),
                  );
        },
    },
    {
        provide: TUI_SCROLL_REF,
        useExisting: ElementRef,
    },
    {
        provide: TUI_SHEET,
        useExisting: forwardRef(() => TuiSheetComponent),
    },
];

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
        return stops.map(
            ({nativeElement}) => nativeElement.offsetTop + nativeElement.clientHeight,
        );
    }
}
