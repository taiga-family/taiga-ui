import {DOCUMENT, ViewportScroller} from '@angular/common';
import {
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    Optional,
    Renderer2,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
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
        @Optional()
        @Inject(TUI_SCROLL_REF)
        private readonly container: ElementRef<HTMLElement> | null,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ViewportScroller) private readonly viewportScroller: ViewportScroller,
    ) {
        const {nativeElement} = this.elementRef;
        const mousedown$ = typedFromEvent(nativeElement, 'mousedown');
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
                const [x, y] = this.viewportScroller.getScrollPosition();

                if (!this.container) {
                    this.viewportScroller.scrollToPosition([
                        this.tuiScrollbar === TuiOrientation.Vertical ? x : scrollLeft,
                        this.tuiScrollbar === TuiOrientation.Vertical ? scrollTop : y,
                    ]);

                    return;
                }

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

        merge(
            fromEvent(
                this.container ? this.container.nativeElement : this.windowRef,
                'scroll',
            ),
            interval(POLLING_TIME),
        )
            .pipe(takeUntil(destroy$), tuiZonefree(ngZone))
            .subscribe(() => {
                if (this.tuiScrollbar === TuiOrientation.Vertical) {
                    renderer.setStyle(nativeElement, 'top', `${this.thumb * 100}%`);
                    renderer.setStyle(nativeElement, 'height', `${this.view * 100}%`);
                } else {
                    renderer.setStyle(nativeElement, 'left', `${this.thumb * 100}%`);
                    renderer.setStyle(nativeElement, 'width', `${this.view * 100}%`);
                }
            });
    }

    private get scrolled(): number {
        const {
            scrollTop,
            scrollHeight,
            clientHeight,
            scrollLeft,
            scrollWidth,
            clientWidth,
        } = this.computedContainer;

        return this.tuiScrollbar === TuiOrientation.Vertical
            ? scrollTop / (scrollHeight - clientHeight)
            : scrollLeft / (scrollWidth - clientWidth);
    }

    private get compensation(): number {
        const {
            clientHeight,
            scrollHeight,
            clientWidth,
            scrollWidth,
        } = this.computedContainer;

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

    private get thumb(): number {
        const compensation = this.compensation || this.view;

        return this.scrolled * (1 - compensation);
    }

    private get view(): number {
        const {
            clientHeight,
            scrollHeight,
            clientWidth,
            scrollWidth,
        } = this.computedContainer;

        return this.tuiScrollbar === TuiOrientation.Vertical
            ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
            : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
    }

    private get computedContainer(): HTMLElement {
        return this.container
            ? this.container.nativeElement
            : this.documentRef.documentElement;
    }

    private getScrolled(
        {clientY, clientX}: MouseEvent,
        offsetVertical: number,
        offsetHorizontal: number,
    ): [number, number] {
        const {innerWidth, innerHeight} = this.windowRef;
        const {offsetHeight, offsetWidth} = this.elementRef.nativeElement;
        const {top = 0, left = 0, width = innerWidth, height = innerHeight} = this
            .container
            ? this.container.nativeElement.getBoundingClientRect()
            : {};

        const maxTop = this.computedContainer.scrollHeight - height;
        const maxLeft = this.computedContainer.scrollWidth - width;
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
