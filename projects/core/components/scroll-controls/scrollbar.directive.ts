import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Input, NgZone, Renderer2} from '@angular/core';
import {
    POLLING_TIME,
    preventDefault,
    TuiDestroyService,
    tuiZonefree,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {TuiOrientation} from '@taiga-ui/core/enums';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {fromEvent, interval, merge, Observable} from 'rxjs';
import {map, switchMap, takeUntil} from 'rxjs/operators';

const MIN_WIDTH = 24;

// @bad TODO: add support for window scroll control
// @dynamic
@Directive({
    selector: '[tuiScrollbar]',
    providers: [TuiDestroyService],
})
export class TuiScrollbarDirective {
    @Input()
    tuiScrollbar: TuiOrientation = TuiOrientation.Vertical;

    constructor(
        @Inject(NgZone) ngZone: NgZone,
        @Inject(Renderer2) renderer: Renderer2,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(TUI_SCROLL_REF) private readonly container: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        const mousedown$ = typedFromEvent(this.elementRef.nativeElement, 'mousedown');
        const mousemove$ = typedFromEvent(this.documentRef, 'mousemove');
        const mouseup$ = typedFromEvent(this.documentRef, 'mouseup');

        mousedown$
            .pipe(
                preventDefault(),
                switchMap(event => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const vertical = getOffsetVertical(event, rect);
                    const horizontal = getOffsetHorizontal(event, rect);

                    return mousemove$.pipe(
                        map(event => this.getScrolled(event, vertical, horizontal)),
                        takeUntil(mouseup$),
                    );
                }),
                takeUntil(destroy$),
                tuiZonefree(ngZone),
            )
            .subscribe(([scrollTop, scrollLeft]) => {
                if (this.tuiScrollbar === TuiOrientation.Vertical) {
                    renderer.setProperty(
                        this.container.nativeElement,
                        'scrollTop',
                        scrollTop,
                    );
                } else {
                    renderer.setProperty(
                        this.container.nativeElement,
                        'scrollLeft',
                        scrollLeft,
                    );
                }
            });

        merge(fromEvent(this.container.nativeElement, 'scroll'), interval(POLLING_TIME))
            .pipe(takeUntil(destroy$), tuiZonefree(ngZone))
            .subscribe(() => {
                if (this.tuiScrollbar === TuiOrientation.Vertical) {
                    renderer.setStyle(
                        this.elementRef.nativeElement,
                        'top',
                        `${this.thumb * 100}%`,
                    );
                    renderer.setStyle(
                        this.elementRef.nativeElement,
                        'height',
                        `${this.view * 100}%`,
                    );
                } else {
                    renderer.setStyle(
                        this.elementRef.nativeElement,
                        'left',
                        `${this.thumb * 100}%`,
                    );
                    renderer.setStyle(
                        this.elementRef.nativeElement,
                        'width',
                        `${this.view * 100}%`,
                    );
                }
            });
    }

    get scrolled(): number {
        const {
            scrollTop,
            scrollHeight,
            clientHeight,
            scrollLeft,
            scrollWidth,
            clientWidth,
        } = this.container.nativeElement;

        return this.tuiScrollbar === TuiOrientation.Vertical
            ? scrollTop / (scrollHeight - clientHeight)
            : scrollLeft / (scrollWidth - clientWidth);
    }

    get compensation(): number {
        const {
            clientHeight,
            scrollHeight,
            clientWidth,
            scrollWidth,
        } = this.container.nativeElement;

        if (
            ((clientHeight * clientHeight) / scrollHeight > MIN_WIDTH &&
                this.tuiScrollbar === TuiOrientation.Vertical) ||
            ((clientWidth * clientWidth) / scrollWidth > MIN_WIDTH &&
                this.tuiScrollbar === TuiOrientation.Horizontal)
        ) {
            return 0;
        }

        return this.tuiScrollbar === TuiOrientation.Vertical
            ? MIN_WIDTH / clientHeight
            : MIN_WIDTH / clientWidth;
    }

    get thumb(): number {
        const compensation = this.compensation || this.view;

        return this.scrolled * (1 - compensation);
    }

    get view(): number {
        const {
            clientHeight,
            scrollHeight,
            clientWidth,
            scrollWidth,
        } = this.container.nativeElement;

        return this.tuiScrollbar === TuiOrientation.Vertical
            ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
            : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
    }

    private getScrolled(
        {clientY, clientX}: MouseEvent,
        offsetVertical: number,
        offsetHorizontal: number,
    ): [number, number] {
        const {offsetHeight, offsetWidth} = this.elementRef.nativeElement;
        const {nativeElement} = this.container;
        const {top, left, width, height} = nativeElement.getBoundingClientRect();

        const maxTop = nativeElement.scrollHeight - height;
        const maxLeft = nativeElement.scrollWidth - width;
        const scrolledTop =
            (clientY - top - offsetHeight * offsetVertical) / (height - offsetHeight);
        const scrolledLeft =
            (clientX - left - offsetWidth * offsetHorizontal) / (width - offsetWidth);

        return [maxTop * scrolledTop, maxLeft * scrolledLeft];
    }
}

function getOffsetVertical({clientY}: MouseEvent, {top, height}: ClientRect): number {
    return (clientY - top) / height;
}

function getOffsetHorizontal({clientX}: MouseEvent, {left, width}: ClientRect): number {
    return (clientX - left) / width;
}
