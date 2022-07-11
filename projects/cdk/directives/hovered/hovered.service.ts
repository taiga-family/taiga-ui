import {ElementRef, Inject, Injectable, NgZone} from '@angular/core';
import {tuiAssertIsElement} from '@taiga-ui/cdk/classes';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {merge, Observable} from 'rxjs';
import {filter, mapTo} from 'rxjs/operators';

function movedOut({currentTarget, relatedTarget}: MouseEvent): boolean {
    tuiAssertIsElement(currentTarget);
    tuiAssertIsElement(relatedTarget);

    return !currentTarget.contains(relatedTarget);
}

@Injectable()
export class TuiHoveredService extends Observable<boolean> {
    private readonly stream$ = merge(
        tuiTypedFromEvent(this.elementRef.nativeElement, 'mouseenter').pipe(mapTo(true)),
        tuiTypedFromEvent(this.elementRef.nativeElement, 'mouseout').pipe(
            filter(movedOut),
            tuiZoneOptimized(this.ngZone),
            mapTo(false),
        ),
    );

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
