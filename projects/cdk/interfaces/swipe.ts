export interface TuiSwipe {
    readonly direction: TuiSwipeDirection;
    readonly events: [TouchEvent, TouchEvent];
}

export type TuiSwipeDirection = 'bottom' | 'left' | 'right' | 'top';

export interface TuiSwipeOptions {
    readonly threshold: number;
    readonly timeout: number;
}
