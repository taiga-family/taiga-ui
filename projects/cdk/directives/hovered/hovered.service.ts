import {ElementRef, inject, Injectable, NgZone} from '@angular/core';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiIsElement} from '@taiga-ui/cdk/utils';
import {distinctUntilChanged, filter, map, merge, Observable} from 'rxjs';

function movedOut({currentTarget, relatedTarget}: MouseEvent): boolean {
    return (
        !tuiIsElement(relatedTarget) ||
        !tuiIsElement(currentTarget) ||
        !currentTarget.contains(relatedTarget)
    );
}

@Injectable()
export class TuiHoveredService extends Observable<boolean> {
    private readonly el: Element = inject(ElementRef).nativeElement;
    private readonly zone = inject(NgZone);

    private readonly stream$ = merge(
        tuiTypedFromEvent(this.el, 'mouseenter').pipe(map(TUI_TRUE_HANDLER)),
        tuiTypedFromEvent(this.el, 'mouseleave').pipe(map(TUI_FALSE_HANDLER)),
        // Hello, Safari
        tuiTypedFromEvent(this.el, 'mouseout').pipe(
            filter(movedOut),
            map(TUI_FALSE_HANDLER),
        ),
    ).pipe(distinctUntilChanged(), tuiZoneOptimized(this.zone));

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }
}
