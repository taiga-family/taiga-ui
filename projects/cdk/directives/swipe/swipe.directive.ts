import {Directive, Inject} from '@angular/core';
import type {TuiSwipe} from '@taiga-ui/cdk/interfaces';
import {TuiSwipeService} from '@taiga-ui/cdk/services';
import type {Observable} from 'rxjs';

@Directive({
    selector: '[tuiSwipe]',
    outputs: ['tuiSwipe'],
    providers: [TuiSwipeService],
})
export class TuiSwipeDirective {
    constructor(@Inject(TuiSwipeService) readonly tuiSwipe: Observable<TuiSwipe>) {}
}
