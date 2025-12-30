export const TUI_ANIMATIONS_DEFAULT_DURATION = 300;

export function tuiGetDuration(speed: number): number {
    return speed && TUI_ANIMATIONS_DEFAULT_DURATION / speed;
}
