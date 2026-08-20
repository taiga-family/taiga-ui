import {inject, Injectable} from '@angular/core';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {filter, map, merge, Observable, switchMap, takeUntil} from 'rxjs';

import {TUI_SCROLL_REF} from './scroll-ref.directive';

@Injectable()
export class TuiScrollbarService extends Observable<
    [number | undefined, number | undefined]
> {
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
    ): [number | undefined, number | undefined] {
        const rect = this.el.parentElement!.getBoundingClientRect();
        const {top, left, right, width, height} = rect;
        const {offsetHeight, offsetWidth} = this.el;
        const rtl = this.el.matches('[dir="rtl"] :scope');
        const inline = rtl ? right : left;
        const multiplier = rtl ? -1 : 1;
        const maxTop = this.element.scrollHeight - height;
        const maxLeft = this.element.scrollWidth - width;
        const y = (clientY - top - offsetHeight * offsetY) / (height - offsetHeight);

        const x =
            (clientX - inline - offsetWidth * offsetX * multiplier) /
            (width - offsetWidth);

        return [
            width > height ? undefined : maxTop * y,
            width > height ? maxLeft * x : undefined,
        ];
    }
}

function getOffsetVertical({clientY}: MouseEvent, {top, height}: DOMRect): number {
    return (clientY - top) / height;
}

function getOffsetHorizontal({clientX}: MouseEvent, {left, width}: DOMRect): number {
    return (clientX - left) / width;
}
