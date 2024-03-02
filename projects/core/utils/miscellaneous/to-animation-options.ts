import {type AnimationOptions} from '@angular/animations';

export const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

export function tuiToAnimationOptions(speed: number): AnimationOptions {
    return {
        value: '',
        params: {
            duration: tuiGetDuration(speed),
        },
    } as unknown as AnimationOptions;
}

export function tuiGetDuration(speed: number): number {
    return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
