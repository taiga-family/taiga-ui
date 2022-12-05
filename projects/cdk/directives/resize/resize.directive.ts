import {Directive, Inject, Output} from '@angular/core';
import {TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';
import {skip} from 'rxjs/operators';

@Directive({
    selector: `[tuiResize]`,
    providers: [TuiDestroyService, TuiResizeService],
})
export class TuiResizeDirective {
    @Output()
    tuiResize = this.resize$.pipe(
        /**
         * @note:
         * skip initial value
         */
        skip(1),
    );

    constructor(
        @Inject(TuiResizeService)
        private readonly resize$: Observable<readonly ResizeObserverEntry[]>,
    ) {}
}
