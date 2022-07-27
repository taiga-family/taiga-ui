import {Directive, Inject} from '@angular/core';
import {TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';

// @dynamic
@Directive({
    selector: `[tuiResize]`,
    outputs: [`tuiResize`],
    providers: [TuiDestroyService, TuiResizeService],
})
export class TuiResizeDirective {
    constructor(
        @Inject(TuiResizeService)
        readonly tuiResize: Observable<readonly ResizeObserverEntry[]>,
    ) {}
}
