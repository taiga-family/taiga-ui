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
import {ANIMATION_FRAME, WINDOW} from '@ng-web-apis/common';
import {
    POLLING_TIME,
    TuiDestroyService,
    TuiInjectionTokenType,
    tuiPreventDefault,
    tuiStopPropagation,
    tuiTypedFromEvent,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import type {TuiOrientation} from '@taiga-ui/core/types';
import {fromEvent, merge} from 'rxjs';
import {map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';

const MIN_WIDTH = 24;

@Directive({
    selector: `[tuiScrollbar]`,
    providers: [TuiDestroyService],
})
export class TuiScrollbarDirective {
    @Input()
    tuiScrollbar: TuiOrientation = `vertical`;

    constructor(
        @Inject(NgZone) ngZone: NgZone,
        @Inject(Renderer2) renderer: Renderer2,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ANIMATION_FRAME)
        animationFrame$: TuiInjectionTokenType<typeof ANIMATION_FRAME>,
        @Inject(TUI_ELEMENT_REF) private readonly wrapper: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TUI_SCROLL_REF)
        private readonly container: ElementRef<HTMLElement> | null,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(ViewportScroller) private readonly viewportScroller: ViewportScroller,
    ) {
        const {nativeElement} = this.elementRef;
        const mousedown$ = tuiTypedFromEvent(nativeElement, `mousedown`);
        const mousemove$ = tuiTypedFromEvent(this.documentRef, `mousemove`);
        const mouseup$ = tuiTypedFromEvent(this.documentRef, `mouseup`);
        const mousedownWrapper$ = tuiTypedFromEvent(wrapper.nativeElement, `mousedown`);

        merge(
            mousedownWrapper$.pipe(
                tuiPreventDefault(),
                map(event => this.getScrolled(event, 0.5, 0.5)),
            ),
            mousedown$.pipe(
                tuiPreventDefault(),
                tuiStopPropagation(),
                switchMap(event => {
                    const rect = nativeElement.getBoundingClientRect();
                    const vertical = getOffsetVertical(event, rect);
                    const horizontal = getOffsetHorizontal(event, rect);

                    return mousemove$.pipe(
                        map(event => this.getScrolled(event, vertical, horizontal)),
                        takeUntil(mouseup$),
                    );
                }),
            ),
        )
            .pipe(tuiZonefree(ngZone), takeUntil(destroy$))
            .subscribe(([scrollTop, scrollLeft]) => {
                const [x, y] = this.viewportScroller.getScrollPosition();

                if (!this.container) {
                    this.viewportScroller.scrollToPosition([
                        this.tuiScrollbar === `vertical` ? x : scrollLeft,
                        this.tuiScrollbar === `vertical` ? scrollTop : y,
                    ]);

                    return;
                }

                if (this.tuiScrollbar === `vertical`) {
                    renderer.setProperty(
                        this.container.nativeElement,
                        `scrollTop`,
                        scrollTop,
                    );
                } else {
                    renderer.setProperty(
                        this.container.nativeElement,
                        `scrollLeft`,
                        scrollLeft,
                    );
                }
            });

        merge(
            fromEvent(
                this.container ? this.container.nativeElement : this.windowRef,
                `scroll`,
            ),
            animationFrame$.pipe(throttleTime(POLLING_TIME)),
        )
            .pipe(tuiZonefree(ngZone), takeUntil(destroy$))
            .subscribe(() => {
                if (this.tuiScrollbar === `vertical`) {
                    renderer.setStyle(nativeElement, `top`, `${this.thumb * 100}%`);
                    renderer.setStyle(nativeElement, `height`, `${this.view * 100}%`);
                } else {
                    renderer.setStyle(nativeElement, `left`, `${this.thumb * 100}%`);
                    renderer.setStyle(nativeElement, `width`, `${this.view * 100}%`);
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

        return this.tuiScrollbar === `vertical`
            ? scrollTop / (scrollHeight - clientHeight)
            : scrollLeft / (scrollWidth - clientWidth);
    }

    private get compensation(): number {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} =
            this.computedContainer;

        if (
            ((clientHeight * clientHeight) / scrollHeight > MIN_WIDTH &&
                this.tuiScrollbar === `vertical`) ||
            ((clientWidth * clientWidth) / scrollWidth > MIN_WIDTH &&
                this.tuiScrollbar === `horizontal`)
        ) {
            return 0;
        }

        return this.tuiScrollbar === `vertical`
            ? MIN_WIDTH / clientHeight
            : MIN_WIDTH / clientWidth;
    }

    private get thumb(): number {
        const compensation = this.compensation || this.view;

        return this.scrolled * (1 - compensation);
    }

    private get view(): number {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} =
            this.computedContainer;

        return this.tuiScrollbar === `vertical`
            ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
            : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
    }

    private get computedContainer(): Element {
        return this.container
            ? this.container.nativeElement
            : this.documentRef.scrollingElement!;
    }

    private getScrolled(
        {clientY, clientX}: MouseEvent,
        offsetVertical: number,
        offsetHorizontal: number,
    ): [number, number] {
        const {offsetHeight, offsetWidth} = this.elementRef.nativeElement;
        const {top, left, width, height} =
            this.wrapper.nativeElement.getBoundingClientRect();

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
