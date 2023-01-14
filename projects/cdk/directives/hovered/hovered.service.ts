import {ElementRef, Inject, Injectable, NgZone} from '@angular/core';
import {ALWAYS_FALSE_HANDLER, ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiIsElement} from '@taiga-ui/cdk/utils';
import {merge, Observable} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

function movedOut({currentTarget, relatedTarget}: MouseEvent): boolean {
    return (
        !tuiIsElement(relatedTarget) ||
        !tuiIsElement(currentTarget) ||
        !currentTarget.contains(relatedTarget)
    );
}

@Injectable()
export class TuiHoveredService extends Observable<boolean> {
    private readonly stream$ = merge(
        tuiTypedFromEvent(this.elementRef.nativeElement, `mouseenter`).pipe(
            map(ALWAYS_TRUE_HANDLER),
        ),
        tuiTypedFromEvent(this.elementRef.nativeElement, `mouseleave`).pipe(
            map(ALWAYS_FALSE_HANDLER),
        ),
        // Hello, Safari
        tuiTypedFromEvent(this.elementRef.nativeElement, `mouseout`).pipe(
            filter(movedOut),
            map(ALWAYS_FALSE_HANDLER),
        ),
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.ngZone));

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
