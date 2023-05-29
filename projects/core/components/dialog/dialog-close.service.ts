import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    tuiContainsOrAfter,
    tuiGetActualTarget,
    tuiIsElement,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils';
import {merge, Observable} from 'rxjs';
import {filter, map, switchMap, take} from 'rxjs/operators';

const SCROLLBAR_PLACEHOLDER = 17;

@Injectable()
export class TuiDialogCloseService extends Observable<unknown> {
    private readonly esc$ = tuiTypedFromEvent(this.doc, `keydown`).pipe(
        filter(event => {
            const target = tuiGetActualTarget(event);

            return (
                event.key === `Escape` &&
                (this.element.contains(target) || this.isOutside(target))
            );
        }),
    );

    private readonly mousedown$ = tuiTypedFromEvent(this.doc, `mousedown`).pipe(
        filter(
            event =>
                tuiGetViewportWidth(this.win) - event.clientX > SCROLLBAR_PLACEHOLDER &&
                this.isOutside(tuiGetActualTarget(event)),
        ),
        switchMap(() =>
            tuiTypedFromEvent(this.doc, `mouseup`).pipe(
                take(1),
                map(tuiGetActualTarget),
                filter(target => this.isOutside(target)),
            ),
        ),
    );

    constructor(
        @Inject(WINDOW) private readonly win: Window,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        super(subscriber => merge(this.esc$, this.mousedown$).subscribe(subscriber));
    }

    private get element(): HTMLElement {
        return this.el.nativeElement;
    }

    private isOutside(target: EventTarget): boolean {
        return (
            tuiIsElement(target) &&
            (!tuiContainsOrAfter(this.element, target) || target === this.element)
        );
    }
}
