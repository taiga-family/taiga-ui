import {inject, Injectable} from '@angular/core';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {filter, map, merge, Observable, switchMap, takeUntil} from 'rxjs';

@Injectable()
export class TuiScrollbarService extends Observable<[number, number]> {
    private readonly el = tuiInjectElement();
    private readonly element = inject(TUI_SCROLL_REF).nativeElement;
    private readonly scroll$ = merge(
        tuiTypedFromEvent(this.el.parentElement!, 'mousedown').pipe(
            filter(({target}) => target !== this.el),
            map((event) => this.getScrolled(event, 0.5, 0.5)),
        ),
        tuiTypedFromEvent(this.el, 'mousedown').pipe(
            tuiZonefree(),
            switchMap((event) => {
                const {ownerDocument} = this.el;
                const rect = this.el.getBoundingClientRect();
                const vertical = getOffsetVertical(event, rect);
                const horizontal = getOffsetHorizontal(event, rect);

                return tuiTypedFromEvent(ownerDocument, 'mousemove').pipe(
                    map((event) => this.getScrolled(event, vertical, horizontal)),
                    takeUntil(tuiTypedFromEvent(ownerDocument, 'mouseup')),
                );
            }),
        ),
    );

    constructor() {
        super((subscriber) => this.scroll$.subscribe(subscriber));
    }

    private getScrolled(
        {clientY, clientX}: MouseEvent,
        offsetY: number,
        offsetX: number,
    ): [number, number] {
        const {offsetHeight, offsetWidth} = this.el;
        const {top, left, width, height} = this.el.parentElement!.getBoundingClientRect();

        const maxTop = this.element.scrollHeight - height;
        const maxLeft = this.element.scrollWidth - width;
        const scrolledTop =
            (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);
        const scrolledLeft =
            (clientX - left - offsetWidth * offsetX) / (width - offsetWidth);

        return [maxTop * scrolledTop, maxLeft * scrolledLeft];
    }
}

function getOffsetVertical({clientY}: MouseEvent, {top, height}: DOMRect): number {
    return (clientY - top) / height;
}

function getOffsetHorizontal({clientX}: MouseEvent, {left, width}: DOMRect): number {
    return (clientX - left) / width;
}
