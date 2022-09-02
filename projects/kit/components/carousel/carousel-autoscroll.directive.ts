import {Directive, Inject} from '@angular/core';

import {TuiCarouselDirective} from './carousel.directive';

@Directive({
    selector: `[tuiCarouselAutoscroll]`,
    outputs: [`tuiCarouselAutoscroll`],
})
export class TuiCarouselAutoscrollDirective {
    constructor(
        @Inject(TuiCarouselDirective)
        readonly tuiCarouselAutoscroll: TuiCarouselDirective,
    ) {}
}
