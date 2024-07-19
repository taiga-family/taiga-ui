import {inject, Injectable, NgZone} from '@angular/core';
import {ANIMATION_FRAME, NAVIGATOR} from '@ng-web-apis/common';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiPositionAccessor} from '@taiga-ui/core/classes';
import type {TuiPoint} from '@taiga-ui/core/types';
import {filter, finalize, map, Observable, startWith} from 'rxjs';

/**
 * https://html.spec.whatwg.org/multipage/interaction.html#the-useractivation-interface
 */
interface UserActivation {
    readonly hasBeenActive: boolean;
    readonly isActive: boolean;
}

type ESNextNavigator = Navigator & {userActivation?: UserActivation};

@Injectable()
export class TuiPositionService extends Observable<TuiPoint> {
    private readonly el = tuiInjectElement();
    private readonly accessor = inject(TuiPositionAccessor);

    constructor() {
        const navigator = inject<ESNextNavigator>(NAVIGATOR);
        const animationFrame$ = inject(ANIMATION_FRAME);
        const zone = inject(NgZone);

        super((subscriber) =>
            animationFrame$
                .pipe(
                    startWith(null),
                    filter(() => navigator?.userActivation?.isActive ?? true),
                    map(() => this.accessor.getPosition(this.el.getBoundingClientRect())),
                    tuiZonefree(zone),
                    finalize(() => this.accessor.getPosition(EMPTY_CLIENT_RECT)),
                )
                .subscribe(subscriber),
        );
    }
}
