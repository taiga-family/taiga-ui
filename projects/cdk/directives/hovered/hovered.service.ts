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
        tuiTypedFromEvent(this.el.nativeElement, `mouseenter`).pipe(
            map(ALWAYS_TRUE_HANDLER),
        ),
        tuiTypedFromEvent(this.el.nativeElement, `mouseleave`).pipe(
            map(ALWAYS_FALSE_HANDLER),
        ),
        // Hello, Safari
        tuiTypedFromEvent(this.el.nativeElement, `mouseout`).pipe(
            filter(movedOut),
            map(ALWAYS_FALSE_HANDLER),
        ),
        /**
         * NOTE: onmouseout events don't trigger when objects move under mouse in Safari
         * https://bugs.webkit.org/show_bug.cgi?id=4117
         */
        tuiTypedFromEvent(this.el.nativeElement, `transitionend`).pipe(
            map(() => this.el.nativeElement.matches(`:hover`)),
        ),
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<Element>,
        @Inject(NgZone) private readonly zone: NgZone,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
