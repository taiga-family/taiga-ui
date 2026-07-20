import {DOCUMENT} from '@angular/common';
import {inject, Injectable, InjectionToken} from '@angular/core';
import {ActivationStart, Router} from '@angular/router';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiCloseWatcher, tuiTypedFromEvent, tuiZonefull} from '@taiga-ui/cdk/observables';
import {
    tuiContainsOrAfter,
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';
import {filter, merge, Observable, switchMap, take} from 'rxjs';

export const TUI_DIALOGS_CLOSE = new InjectionToken<Observable<unknown>>(
    ngDevMode ? 'TUI_DIALOGS_CLOSE' : '',
    {
        factory: () =>
            inject(Router).events.pipe(filter((e) => e instanceof ActivationStart)),
    },
);

@Injectable()
export class TuiDialogCloseService extends Observable<unknown> {
    private readonly win = inject(WA_WINDOW);
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    private readonly esc$ = tuiTypedFromEvent(this.doc, 'keydown').pipe(
        filter((event) => {
            const target = tuiGetActualTarget(event);

            return (
                // @ts-ignore
                typeof CloseWatcher === 'undefined' &&
                event.key?.toLowerCase() === 'escape' &&
                !event.defaultPrevented &&
                (this.el.contains(target) || this.isOutside(target))
            );
        }),
    );

    private readonly mousedown$ = tuiTypedFromEvent(this.doc, 'mousedown').pipe(
        filter(
            (event) =>
                // Scrollbars
                tuiGetViewportWidth(this.win) - event.clientX > 17 &&
                this.shouldClose(event),
        ),
        switchMap(() =>
            tuiTypedFromEvent(this.doc, 'mouseup').pipe(
                take(1),
                filter((event) => this.shouldClose(event)),
            ),
        ),
    );

    // `tuiZonefull()` → `inject(NgZone)` → requires injection context.
    // Field initializer runs inside it, subscription might not
    // (e.g. `outputFromObservable`) → NG0203 if called there
    private readonly watcher$ = tuiCloseWatcher().pipe(tuiZonefull());

    constructor() {
        super((subscriber) =>
            merge(this.esc$, this.mousedown$, this.watcher$).subscribe(subscriber),
        );
    }

    private isOutside(target: EventTarget): boolean {
        return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
    }

    private shouldClose(event: MouseEvent): boolean {
        const target = tuiGetActualTarget(event);

        return (
            this.isOutside(target) || (target === this.el && this.isOutsideRect(event))
        );
    }

    // Host hit with coordinates outside its box → click landed on pseudo-element overlay
    private isOutsideRect({clientX, clientY}: MouseEvent): boolean {
        const rect = this.el.getBoundingClientRect();

        return (
            clientX < rect.left ||
            clientX > rect.right ||
            clientY < rect.top ||
            clientY > rect.bottom
        );
    }
}
