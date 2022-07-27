import {Directive, ElementRef, Inject, Optional, Self} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {POLLING_TIME} from '@taiga-ui/cdk/constants';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk/tokens';
import {Observable, race, timer} from 'rxjs';
import {map, skipWhile, take, throttleTime} from 'rxjs/operators';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = `.ng-animating`;

@Directive()
export class TuiDefaultAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        tuiFocusableComponent: TuiFocusableElementAccessor | null,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
    ) {
        super(tuiFocusableComponent, elementRef);
    }

    setFocus(): void {
        if (this.isTextFieldElement) {
            race(
                timer(TIMEOUT),
                this.animationFrame$.pipe(
                    throttleTime(POLLING_TIME),
                    map(() => this.element.closest(NG_ANIMATION_SELECTOR)),
                    skipWhile(Boolean),
                    take(1),
                ),
            ).subscribe(() => this.element.focus());
        } else {
            this.element.focus();
        }
    }
}
