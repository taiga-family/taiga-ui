import type {AnimationOptions} from '@angular/animations';
import {inject} from '@angular/core';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';

export const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

export function tuiToAnimationOptions(
    speed: number = inject(TUI_ANIMATIONS_SPEED),
    easing?: string,
): AnimationOptions {
    return {
        value: '',
        params: {
            duration: tuiGetDuration(speed),
            easing,
        },
    } as unknown as AnimationOptions;
}

export function tuiGetDuration(speed: number): number {
    return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
