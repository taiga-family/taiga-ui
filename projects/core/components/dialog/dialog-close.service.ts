import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {
    tuiContainsOrAfter,
    tuiGetActualTarget,
    tuiIsCurrentTarget,
    tuiIsElement,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils';
import {merge, Observable} from 'rxjs';
import {filter, map, switchMap, take} from 'rxjs/operators';

const SCROLLBAR_PLACEHOLDER = 17;

@Injectable()
export class TuiDialogCloseService extends Observable<unknown> {
    private readonly click$ = tuiTypedFromEvent(this.element, `click`).pipe(
        filter(tuiIsCurrentTarget),
    );

    private readonly esc$ = tuiTypedFromEvent(this.documentRef, `keydown`).pipe(
        filter(event => {
            const key = event.key;
            const target = tuiGetActualTarget(event);

            return (
                key === `Escape` &&
                tuiIsElement(target) &&
                (this.element.contains(target) ||
                    !tuiContainsOrAfter(this.element, target))
            );
        }),
    );

    private readonly mousedown$ = tuiTypedFromEvent(this.documentRef, `mousedown`).pipe(
        filter(event => {
            const target = tuiGetActualTarget(event);
            const clientX = event.clientX;

            return (
                tuiIsElement(target) &&
                tuiGetViewportWidth(this.windowRef) - clientX > SCROLLBAR_PLACEHOLDER &&
                !tuiContainsOrAfter(this.element, target)
            );
        }),
        switchMap(() =>
            tuiTypedFromEvent(this.documentRef, `mouseup`).pipe(
                take(1),
                map(tuiGetActualTarget),
                filter(
                    target =>
                        tuiIsElement(target) && !tuiContainsOrAfter(this.element, target),
                ),
            ),
        ),
    );

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super(subscriber =>
            merge(this.click$, this.esc$, this.mousedown$).subscribe(subscriber),
        );
    }

    private get element(): HTMLElement {
        return this.elementRef.nativeElement;
    }
}
