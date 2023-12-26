import {ElementRef, Inject, Injectable} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {EMPTY_CLIENT_RECT, tuiZonefree} from '@taiga-ui/cdk';
import {TuiPositionAccessor} from '@taiga-ui/core/abstract';
import {TuiPoint} from '@taiga-ui/core/types';
import {finalize, map, Observable} from 'rxjs';

@Injectable()
export class TuiPositionService extends Observable<TuiPoint> {
    constructor(
        // Destructuring here causes memory leak
        @Inject(ElementRef) el: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) animationFrame: Observable<unknown>,
        @Inject(TuiPositionAccessor) accessor: TuiPositionAccessor,
    ) {
        super(subscriber =>
            animationFrame
                .pipe(
                    map(() => el.nativeElement.getBoundingClientRect()),
                    map(rect => accessor.getPosition(rect)),
                    tuiZonefree(),
                    finalize(() => accessor.getPosition(EMPTY_CLIENT_RECT)),
                )
                .subscribe(subscriber),
        );
    }
}
