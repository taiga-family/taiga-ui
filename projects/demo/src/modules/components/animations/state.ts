import {inject, Injectable} from '@angular/core';
import {TUI_ANIMATIONS_SPEED, tuiGetDuration} from '@taiga-ui/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AnimationState extends BehaviorSubject<number> {
    constructor() {
        super(tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)));
    }
}
