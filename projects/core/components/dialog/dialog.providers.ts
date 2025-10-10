import {DOCUMENT} from '@angular/common';
import {inject, Injectable, InjectionToken} from '@angular/core';
import {ActivationStart, Router} from '@angular/router';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiCloseWatcher, tuiTypedFromEvent, tuiZonefull} from '@taiga-ui/cdk/observables';
import {type TuiPopover} from '@taiga-ui/cdk/services';
import {
    tuiContainsOrAfter,
    tuiGetActualTarget,
    tuiInjectElement,
    tuiIsElement,
} from '@taiga-ui/cdk/utils/dom';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils';
import {BehaviorSubject, filter, map, merge, Observable, switchMap, take} from 'rxjs';

export const TUI_DIALOGS = new InjectionToken(ngDevMode ? 'TUI_DIALOGS' : '', {
    factory: () => new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
});

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
        super((subscriber) =>
            merge(
                this.esc$,
                this.mousedown$,
                tuiCloseWatcher().pipe(tuiZonefull()),
            ).subscribe(subscriber),
        );
    }

    private isOutside(target: EventTarget): boolean {
        return tuiIsElement(target) && !tuiContainsOrAfter(this.el, target);
    }
}
