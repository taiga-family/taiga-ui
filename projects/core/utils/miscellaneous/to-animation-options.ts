import {AnimationOptions} from '@angular/animations';

const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

export function tuiToAnimationOptions(speed: number): AnimationOptions {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
        value: '',
        params: {
            duration: tuiGetDuration(speed),
        },
    } as AnimationOptions;
}

export function tuiGetDuration(speed: number): number {
    return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
