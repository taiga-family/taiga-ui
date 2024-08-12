import {inject, Injectable, NgZone} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiGetElementObscures, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged, map, Observable, startWith, throttleTime} from 'rxjs';

/**
 * Service that monitors element visibility by polling and returning
 * either null or an array of elements that overlap given element edges
 */
@Injectable()
export class TuiObscuredService extends Observable<readonly Element[] | null> {
    private readonly el = tuiInjectElement();
    private readonly obscured$ = inject(WA_ANIMATION_FRAME).pipe(
        throttleTime(100),
        map(() => tuiGetElementObscures(this.el)),
        startWith(null),
        distinctUntilChanged(),
        tuiZoneOptimized(inject(NgZone)),
    );

    constructor() {
        super((subscriber) => this.obscured$.subscribe(subscriber));
    }
}
