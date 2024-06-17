import {Directive, inject, Output} from '@angular/core';

import {TuiSwipeService} from './swipe.service';

@Directive({
    standalone: true,
    selector: '[tuiSwipe]',
    providers: [TuiSwipeService],
})
export class TuiSwipe {
    @Output()
    public readonly tuiSwipe = inject(TuiSwipeService);
}
