import {DOCUMENT} from '@angular/common';
import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetActualTarget, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiDialogCloseService} from '@taiga-ui/core/portals/dialog';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';
import {filter, merge, switchMap, take} from 'rxjs';

/**
 * Emits on Esc/CloseWatcher and on clicks outside the host, tracked as
 * mousedown/mouseup pairs → drag inside + release outside does not emit.
 * Portals stacked after the host count as inside, clicks on pseudo-element
 * overlays are detected by coordinates against the host rect.
 */
@Directive({
    selector: '[tuiClose]',
    providers: [TuiDialogCloseService],
})
export class TuiClose {
    private readonly win = inject(WA_WINDOW);
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    private readonly overlay$ = tuiTypedFromEvent(this.doc, 'mousedown').pipe(
        filter(
            (event) =>
                tuiGetViewportWidth(this.win) - event.clientX > 17 &&
                this.isOnOverlay(event),
        ),
        switchMap(() =>
            tuiTypedFromEvent(this.doc, 'mouseup').pipe(
                take(1),

                filter((event) => this.isOnOverlay(event)),
            ),
        ),
    );

    public readonly tuiClose = outputFromObservable(
        merge(inject(TuiDialogCloseService).pipe(), this.overlay$),
    );

    private isOnOverlay(event: MouseEvent): boolean {
        const {clientX, clientY} = event;
        const rect = this.el.getBoundingClientRect();

        return (
            tuiGetActualTarget(event) === this.el &&
            (clientX < rect.left ||
                clientX > rect.right ||
                clientY < rect.top ||
                clientY > rect.bottom)
        );
    }
}
