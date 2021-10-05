import {Inject, Injectable, NgZone, Optional} from '@angular/core';
import {RouterLinkActive} from '@angular/router';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {TuiDestroyService, tuiZoneOptimized} from '@taiga-ui/cdk';
import {EMPTY, Observable} from 'rxjs';
import {distinctUntilChanged, map, takeUntil} from 'rxjs/operators';

@Injectable()
export class TuiRouterLinkActiveService extends Observable<boolean> {
    constructor(
        @Optional()
        @Inject(RouterLinkActive)
        routerLinkActive: RouterLinkActive | null,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        const stream$ = routerLinkActive
            ? animationFrame$.pipe(
                  map(() => routerLinkActive.isActive),
                  distinctUntilChanged(),
                  tuiZoneOptimized(ngZone),
                  takeUntil(destroy$),
              )
            : EMPTY;

        super(subscriber => stream$.subscribe(subscriber));
    }
}
