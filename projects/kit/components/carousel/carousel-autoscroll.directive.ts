import {Directive, inject, Output} from '@angular/core';

import {TuiCarouselDirective} from './carousel.directive';

@Directive({
    selector: '[tuiCarouselAutoscroll]',
})
export class TuiCarouselAutoscrollDirective {
    @Output()
    readonly tuiCarouselAutoscroll = inject(TuiCarouselDirective);
}
