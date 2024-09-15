import type {ElementRef, NgZone} from '@angular/core';
import {tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import type {Observable} from 'rxjs';
import {map, race, skipWhile, take, throttleTime, timer} from 'rxjs';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = '.ng-animating';

export class TuiDefaultAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        el: ElementRef<HTMLElement>,
        private readonly animationFrame$: Observable<number>,
        private readonly zone: NgZone,
        win: Window,
    ) {
        super(el, win);
    }

    public setFocus(): void {
        if (this.isTextFieldElement) {
            race(
                timer(TIMEOUT),
                this.animationFrame$.pipe(
                    throttleTime(100, tuiZonefreeScheduler(this.zone)),
                    map(() => this.element.closest(NG_ANIMATION_SELECTOR)),
                    skipWhile(Boolean),
                    take(1),
                ),
            ).subscribe(() => {
                this.element.focus({preventScroll: true});
            });
        } else {
            this.element.focus({preventScroll: true});
            this.collapseToEnd();
        }
    }
}
