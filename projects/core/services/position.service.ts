import {ElementRef, Inject, Injectable, NgZone} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZonefree} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {TuiPoint} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class TuiPositionService extends Observable<TuiPoint> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) animationFrame: Observable<unknown>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiPositionAccessor) accessor: TuiPositionAccessor,
    ) {
        super(subscriber =>
            animationFrame
                .pipe(
                    map(() => nativeElement.getBoundingClientRect()),
                    map(rect => accessor.getPosition(rect)),
                    tuiZonefree(ngZone),
                )
                .subscribe(subscriber),
        );
    }
}
