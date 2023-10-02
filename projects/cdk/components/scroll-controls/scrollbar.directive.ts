import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Input, NgZone, Self} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {POLLING_TIME} from '@taiga-ui/cdk/constants';
import {
    tuiPreventDefault,
    tuiScrollFrom,
    tuiStopPropagation,
    tuiTypedFromEvent,
    tuiZonefree,
} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {TUI_SCROLL_REF} from '@taiga-ui/cdk/tokens';
import {merge, Observable} from 'rxjs';
import {map, switchMap, takeUntil, throttleTime} from 'rxjs/operators';

const MIN_WIDTH = 24;

@Directive({
    selector: '[tuiScrollbar]',
    providers: [TuiDestroyService],
})
export class TuiScrollbarDirective {
    @Input()
    tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    constructor(
        @Inject(NgZone) zone: NgZone,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Inject(TUI_SCROLL_REF) private readonly container: ElementRef<HTMLElement>,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        const {nativeElement} = this.el;
        const mousedown$ = tuiTypedFromEvent(nativeElement, 'mousedown');
        const mousemove$ = tuiTypedFromEvent(this.doc, 'mousemove');
        const mouseup$ = tuiTypedFromEvent(this.doc, 'mouseup');
        const mousedownWrapper$ = tuiTypedFromEvent(this.wrapper, 'mousedown');

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
            .pipe(tuiZonefree(zone), takeUntil(destroy$))
            .subscribe(([scrollTop, scrollLeft]) => {
                if (this.tuiScrollbar === 'vertical') {
                    this.element.scrollTop = scrollTop;
                } else {
                    this.element.scrollLeft = scrollLeft;
                }
            });

        merge(
            animationFrame$.pipe(throttleTime(POLLING_TIME)),
            tuiScrollFrom(this.element),
        )
            .pipe(tuiZonefree(zone), takeUntil(destroy$))
            .subscribe(() => {
                if (this.tuiScrollbar === 'vertical') {
                    nativeElement.style.top = `${this.thumb * 100}%`;
                    nativeElement.style.height = `${this.view * 100}%`;
                } else {
                    nativeElement.style.left = `${this.thumb * 100}%`;
                    nativeElement.style.width = `${this.view * 100}%`;
                }
            });
    }

    private get wrapper(): Element {
        return this.el.nativeElement.parentElement!;
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
        const {top, left, width, height} = this.wrapper.getBoundingClientRect();

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
