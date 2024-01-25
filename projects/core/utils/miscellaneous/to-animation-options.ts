import {TuiAnimationOptions} from '@taiga-ui/core/interfaces';

const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

export function tuiToAnimationOptions(speed: number): TuiAnimationOptions {
    return {
        value: '',
        params: {
            duration: tuiGetDuration(speed),
        },
    };
}

export function tuiGetDuration(speed: number): number {
    return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
