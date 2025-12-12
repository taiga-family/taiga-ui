import {Directive, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {TuiCarouselDirective} from './carousel.directive';

@Directive({
    selector: '[tuiCarouselAutoscroll]',
})
export class TuiCarouselAutoscroll {
    public readonly tuiCarouselAutoscroll = outputFromObservable(
        inject(TuiCarouselDirective),
    );
}
