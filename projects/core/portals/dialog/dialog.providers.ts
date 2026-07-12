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
import {filter, map, merge, Observable, switchMap, take, tap} from 'rxjs';

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
        // TODO: remove debug
        tap(() => console.log('[TuiDialogCloseService] EMIT ← Esc keydown', this.el)),
    );

    private readonly mousedown$ = tuiTypedFromEvent(this.doc, 'mousedown').pipe(
        filter(
            (event) =>
                // Scrollbars
                tuiGetViewportWidth(this.win) - event.clientX > 17 &&
                this.isOutside(tuiGetActualTarget(event)),
        ),
        // TODO: remove debug
        tap(() =>
            console.log(
                '[TuiDialogCloseService] mousedown outside — waiting mouseup',
                this.el,
            ),
        ),
        switchMap(() =>
            tuiTypedFromEvent(this.doc, 'mouseup').pipe(
                take(1),
                map(tuiGetActualTarget),
                // TODO: remove debug
                tap((target) =>
                    console.log(
                        '[TuiDialogCloseService] mouseup — outside:',
                        this.isOutside(target),
                    ),
                ),
                filter((target) => this.isOutside(target)),
            ),
        ),
        // TODO: remove debug
        tap(() =>
            console.log(
                '[TuiDialogCloseService] EMIT ← outside mousedown/mouseup pair',
                this.el,
            ),
        ),
    );

    // `tuiZonefull()` → `inject(NgZone)` → requires injection context.
    // Field initializer runs inside it, subscription might not
    // (e.g. `outputFromObservable`) → NG0203 if called there
    private readonly watcher$ = tuiCloseWatcher().pipe(
        // TODO: remove debug
        tap(() =>
            console.log('[TuiDialogCloseService] EMIT ← CloseWatcher cancel', this.el),
        ),
        tuiZonefull(),
    );

    constructor() {
        super((subscriber) =>
            merge(this.esc$, this.mousedown$, this.watcher$).subscribe(subscriber),
        );
    }

    private isOutside(target: EventTarget): boolean {
        return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
    }
}
