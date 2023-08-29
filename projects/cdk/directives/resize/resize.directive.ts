import {Directive, Inject} from '@angular/core';
import {TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

@Directive({
    selector: '[tuiResize]',
    providers: [TuiDestroyService, TuiResizeService],
    outputs: ['tuiResize'],
})
export class TuiResizeDirective {
    constructor(
        @Inject(TuiResizeService)
        readonly tuiResize: Observable<readonly ResizeObserverEntry[]>,
    ) {}
}
