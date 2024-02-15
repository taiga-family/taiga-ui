import {inject, Injectable, NgZone} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {TuiDestroyService, tuiZoneOptimized} from '@taiga-ui/cdk';
import {
    distinctUntilChanged,
    EMPTY,
    map,
    merge,
    Observable,
    takeUntil,
    timer,
} from 'rxjs';

// TODO: Remove when Angular is update and `RouterLinkActive` has output
@Injectable()
export class TuiRouterLinkActiveService extends Observable<boolean> {
    constructor() {
        const routerLinkActive = inject(RouterLinkActive, {optional: true});

        const stream$ = routerLinkActive
            ? merge(
                  timer(0), // SSR (animationFrame$ never emits value during SSR)
                  inject(ANIMATION_FRAME),
              ).pipe(
                  map(() => routerLinkActive.isActive),
                  distinctUntilChanged(),
                  tuiZoneOptimized(inject(NgZone)),
                  takeUntil(inject(TuiDestroyService, {self: true})),
              )
            : EMPTY;

        super(subscriber => stream$.subscribe(subscriber));
    }
}
