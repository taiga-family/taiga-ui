import {ElementRef, Inject, Injectable, NgZone} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZonefree} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {TuiPoint} from '@taiga-ui/core/types';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Injectable()
export class TuiPositionService extends Observable<TuiPoint> {
    constructor(
        // Destructuring here causes memory leak
        @Inject(ElementRef) el: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) animationFrame: Observable<unknown>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiPositionAccessor) accessor: TuiPositionAccessor,
    ) {
        super(subscriber =>
            animationFrame
                .pipe(
                    map(() => el.nativeElement.getBoundingClientRect()),
                    distinctUntilChanged(
                        (prev, next) =>
                            JSON.stringify(prev.toJSON()) !==
                            JSON.stringify(next.toJSON()),
                    ),
                    map(rect => accessor.getPosition(rect)),
                    tuiZonefree(ngZone),
                )
                .subscribe(subscriber),
        );
    }
}
