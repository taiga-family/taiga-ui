import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {TuiSwipeService} from './swipe.service';

@Directive({
    selector: '[tuiSwipe]',
    providers: [TuiSwipeService],
})
export class TuiSwipe {
    public readonly tuiSwipe = outputFromObservable(inject(TuiSwipeService));
}
