import {inject, Injectable} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZonefreeScheduler, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {distinctUntilChanged, map, Observable, startWith, throttleTime} from 'rxjs';

import {TUI_SCROLL_REF} from './scroll-ref.directive';

@Injectable()
export class TuiScrollControlsService extends Observable<readonly [boolean, boolean]> {
    private readonly scrollRef = inject(TUI_SCROLL_REF);

    private readonly stream$ = inject(WA_ANIMATION_FRAME).pipe(
        throttleTime(300, tuiZonefreeScheduler()),
        map(() => this.scrollbars),
        startWith([false, false] as const),
        distinctUntilChanged((a, b) => a[0] === b[0] && a[1] === b[1]),
        tuiZoneOptimized(),
    );

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    private get scrollbars(): [boolean, boolean] {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} =
            this.scrollRef.nativeElement;

        return [
            Math.ceil((clientHeight / scrollHeight) * 100) < 100,
            Math.ceil((clientWidth / scrollWidth) * 100) < 100,
        ];
    }
}
