import {DOCUMENT} from '@angular/common';
import {
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    Renderer2,
    Self,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    POLLING_TIME,
    TuiDestroyService,
    tuiPreventDefault,
    tuiScrollFrom,
    tuiStopPropagation,
    tuiTypedFromEvent,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {TuiOrientation} from '@taiga-ui/core/types';
import {merge, Observable} from 'rxjs';
import {map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';

const MIN_WIDTH = 24;

@Directive({
    selector: '[tuiScrollbar]',
    providers: [TuiDestroyService],
})
export class TuiScrollbarDirective {
    @Input()
    tuiScrollbar: TuiOrientation = 'vertical';

    constructor(
        @Inject(NgZone) ngZone: NgZone,
        @Inject(Renderer2) renderer: Renderer2,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Inject(TUI_ELEMENT_REF) private readonly wrapper: ElementRef<HTMLElement>,
        @Inject(TUI_SCROLL_REF) private readonly container: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        const {nativeElement} = this.el;
        const mousedown$ = tuiTypedFromEvent(nativeElement, 'mousedown');
        const mousemove$ = tuiTypedFromEvent(this.doc, 'mousemove');
        const mouseup$ = tuiTypedFromEvent(this.doc, 'mouseup');
        const mousedownWrapper$ = tuiTypedFromEvent(
            this.wrapper.nativeElement,
            'mousedown',
        );

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
                if (this.tuiScrollbar === 'vertical') {
                    renderer.setProperty(this.element, 'scrollTop', scrollTop);
                } else {
                    renderer.setProperty(this.element, 'scrollLeft', scrollLeft);
                }
            });

        merge(
            animationFrame$.pipe(throttleTime(POLLING_TIME)),
            tuiScrollFrom(this.element),
        )
            .pipe(tuiZonefree(ngZone), takeUntil(destroy$))
            .subscribe(() => {
                if (this.tuiScrollbar === 'vertical') {
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
        } = this.element;

        return this.tuiScrollbar === 'vertical'
            ? scrollTop / (scrollHeight - clientHeight)
            : scrollLeft / (scrollWidth - clientWidth);
    }

    private get compensation(): number {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.element;

        if (
            ((clientHeight * clientHeight) / scrollHeight > MIN_WIDTH &&
                this.tuiScrollbar === 'vertical') ||
            ((clientWidth * clientWidth) / scrollWidth > MIN_WIDTH &&
                this.tuiScrollbar === 'horizontal')
        ) {
            return 0;
        }

        return this.tuiScrollbar === 'vertical'
            ? MIN_WIDTH / clientHeight
            : MIN_WIDTH / clientWidth;
    }

    private get thumb(): number {
        const compensation = this.compensation || this.view;

        return this.scrolled * (1 - compensation);
    }

    private get view(): number {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.element;

        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
            : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
    }

    private get element(): Element {
        return this.container.nativeElement;
    }

    private getScrolled(
        {clientY, clientX}: MouseEvent,
        offsetVertical: number,
        offsetHorizontal: number,
    ): [number, number] {
        const {offsetHeight, offsetWidth} = this.el.nativeElement;
        const {top, left, width, height} =
            this.wrapper.nativeElement.getBoundingClientRect();

        const maxTop = this.element.scrollHeight - height;
        const maxLeft = this.element.scrollWidth - width;
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
