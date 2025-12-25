import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WA_INTERSECTION_THRESHOLD,
    WaIntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {catchError, distinctUntilChanged, EMPTY, map} from 'rxjs';

// TODO: Consider making universal and moving to CDK
@Directive({
    selector: 'tui-stuck:never',
    providers: [
        WaIntersectionObserverService,
        {
            provide: WA_INTERSECTION_THRESHOLD,
            useValue: [0, 1],
        },
    ],
    host: {'[class._stuck]': 'stuck()'},
})
export class TuiStuck {
    protected readonly stuck = toSignal(
        inject(WaIntersectionObserverService).pipe(
            map((entries) => (entries[entries.length - 1]?.intersectionRatio ?? 0) < 1),
            distinctUntilChanged(),
            tuiWatch(),
            catchError(() => EMPTY), // SSR
        ),
    );
}
