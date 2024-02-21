import {Directive, inject, Output} from '@angular/core';
import {TuiSwipeService} from '@taiga-ui/cdk/services';

@Directive({
    selector: '[tuiSwipe]',
    providers: [TuiSwipeService],
})
export class TuiSwipeDirective {
    @Output()
    readonly tuiSwipe = inject(TuiSwipeService);
}
