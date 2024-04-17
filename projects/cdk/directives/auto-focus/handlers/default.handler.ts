import type {ElementRef} from '@angular/core';
import {POLLING_TIME} from '@taiga-ui/cdk/constants';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk/types';
import type {Observable} from 'rxjs';
import {map, race, skipWhile, take, throttleTime, timer} from 'rxjs';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = '.ng-animating';

export class TuiDefaultAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        focusable: TuiFocusableElementAccessor | null,
        el: ElementRef<HTMLElement>,
        private readonly animationFrame$: Observable<number>,
    ) {
        super(focusable, el);
    }

    public setFocus(): void {
        if (this.isTextFieldElement) {
            race(
                timer(TIMEOUT),
                this.animationFrame$.pipe(
                    throttleTime(POLLING_TIME),
                    map(() => this.element.closest(NG_ANIMATION_SELECTOR)),
                    skipWhile(Boolean),
                    take(1),
                ),
            ).subscribe(() => this.element.focus({preventScroll: true}));
        } else {
            this.element.focus({preventScroll: true});
        }
    }
}
