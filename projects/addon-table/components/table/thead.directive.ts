import {Directive, HostBinding, HostListener, Inject} from '@angular/core';
import {
    INTERSECTION_ROOT_MARGIN,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
    selector: 'thead[tuiThead]',
    providers: [
        IntersectionObserverService,
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
})
export class TuiTheadDirective {
    @HostBinding('$.class._stuck')
    @HostListener('$.class._stuck')
    readonly stuck$ = asCallable(
        this.entries$.pipe(map(([{intersectionRatio}]) => intersectionRatio < 1)),
    );

    constructor(
        @Inject(IntersectionObserverService)
        private readonly entries$: Observable<IntersectionObserverEntry[]>,
    ) {}
}
