import {Directive, Inject} from '@angular/core';
import {TuiSwipeService} from '@taiga-ui/cdk/services';

// @dynamic
@Directive({
    selector: '[tuiSwipe]',
    outputs: ['tuiSwipe'],
    providers: [TuiSwipeService],
})
export class TuiSwipeDirective {
    constructor(@Inject(TuiSwipeService) readonly tuiSwipe: TuiSwipeService) {}
}
