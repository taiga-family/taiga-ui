import {type ElementRef, type NgZone} from '@angular/core';
import {tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {map, type Observable, race, skipWhile, take, throttleTime, timer} from 'rxjs';

import {type TuiAutofocusOptions} from '../autofocus.options';
import {AbstractTuiAutofocusHandler} from './abstract.handler';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = '.ng-animating';

export class TuiDefaultAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        el: ElementRef<HTMLElement>,
        private readonly animationFrame$: Observable<number>,
        private readonly zone: NgZone,
        options: TuiAutofocusOptions,
    ) {
        super(el, options);
    }

    public setFocus(): void {
        if (this.isTextFieldElement) {
            race(
                timer(this.options.delay || TIMEOUT),
                this.animationFrame$.pipe(
                    throttleTime(100, tuiZonefreeScheduler(this.zone)),
                    map(() => this.element.closest(NG_ANIMATION_SELECTOR)),
                    skipWhile(Boolean),
                    take(1),
                ),
            ).subscribe(() =>
                this.element.focus({preventScroll: this.options.preventScroll}),
            );
        } else {
            this.element.focus({preventScroll: true});
        }
    }
}
