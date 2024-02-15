import {ElementRef, inject, Injectable, NgZone} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {EMPTY_CLIENT_RECT, tuiZonefree} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {TuiPoint} from '@taiga-ui/core/types';
import {finalize, map, Observable} from 'rxjs';

@Injectable()
export class TuiPositionService extends Observable<TuiPoint> {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly accessor = inject(TuiPositionAccessor);

    constructor() {
        const animationFrame$ = inject(ANIMATION_FRAME);
        const destroy$ = inject(NgZone);

        super(subscriber =>
            animationFrame$
                .pipe(
                    map(() => this.el.getBoundingClientRect()),
                    map(rect => this.accessor.getPosition(rect)),
                    tuiZonefree(destroy$),
                    finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT)),
                )
                .subscribe(subscriber),
        );
    }
}
