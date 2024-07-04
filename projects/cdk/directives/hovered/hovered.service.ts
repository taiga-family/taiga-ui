import type {Signal} from '@angular/core';
import {ChangeDetectorRef, inject, Injectable, NgZone} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent, tuiWatch, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils';
import {distinctUntilChanged, filter, map, merge, Observable, of} from 'rxjs';

function movedOut({currentTarget, relatedTarget}: MouseEvent): boolean {
    return (
        !tuiIsElement(relatedTarget) ||
        !tuiIsElement(currentTarget) ||
        !currentTarget.contains(relatedTarget)
    );
}

@Injectable()
export class TuiHoveredService extends Observable<boolean> {
    private readonly el = tuiInjectElement();
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
        super((subscriber) => this.stream$.subscribe(subscriber));
    }
}

export function tuiHovered(): Signal<boolean> {
    return toSignal(
        inject(TUI_IS_MOBILE)
            ? of(false)
            : inject(TuiHoveredService).pipe(tuiWatch(inject(ChangeDetectorRef))),
        {
            initialValue: false,
        },
    );
}
