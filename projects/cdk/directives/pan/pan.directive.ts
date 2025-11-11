import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {TuiPanService} from './pan.service';

@Directive({
    selector: '[tuiPan]',
    providers: [TuiPanService],
})
export class TuiPan {
    public readonly tuiPan = outputFromObservable(inject(TuiPanService));
}
