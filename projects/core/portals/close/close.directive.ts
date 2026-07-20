import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {TuiDialogCloseService} from '@taiga-ui/core/portals/dialog';

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
    public readonly tuiClose = outputFromObservable(inject(TuiDialogCloseService));
}
