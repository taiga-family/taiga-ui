import {Directive, Inject} from '@angular/core';
import {TuiSwipe} from '@taiga-ui/cdk/interfaces';
import {TuiSwipeService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

// @dynamic
@Directive({
    selector: `[tuiSwipe]`,
    outputs: [`tuiSwipe`],
    providers: [TuiSwipeService],
})
export class TuiSwipeDirective {
    constructor(@Inject(TuiSwipeService) readonly tuiSwipe: Observable<TuiSwipe>) {}
}
