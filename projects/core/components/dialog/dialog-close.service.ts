import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {
    tuiContainsOrAfter,
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils';
import {filter, map, merge, Observable, switchMap, take} from 'rxjs';

const SCROLLBAR_PLACEHOLDER = 17;

@Injectable()
export class TuiDialogCloseService extends Observable<unknown> {
    private readonly win = inject(WINDOW);
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    private readonly esc$ = tuiTypedFromEvent(this.doc, 'keydown').pipe(
        filter((event) => {
            const target = tuiGetActualTarget(event);

            return (
                event.key === 'Escape' &&
                !event.defaultPrevented &&
                (this.el.contains(target) || this.isOutside(target))
            );
        }),
    );

    private readonly mousedown$ = tuiTypedFromEvent(this.doc, 'mousedown').pipe(
        filter(
            (event) =>
                tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER &&
                this.isOutside(tuiGetActualTarget(event)),
        ),
        switchMap(() =>
            tuiTypedFromEvent(this.doc, 'mouseup').pipe(
                take(1),
                map(tuiGetActualTarget),
                filter((target) => this.isOutside(target)),
            ),
        ),
    );

    constructor() {
        super((subscriber) => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    }

    private isOutside(target: EventTarget): boolean {
        return (
            tuiIsElement(target) &&
            (!tuiContainsOrAfter(this.el, target) || target === this.el)
        );
    }
}
