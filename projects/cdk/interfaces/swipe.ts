export interface TuiSwipe {
    readonly direction: TuiSwipeDirection;
    readonly events: [TouchEvent, TouchEvent];
}

export type TuiSwipeDirection = 'left' | 'right' | 'top' | 'bottom';

export interface TuiSwipeOptions {
    readonly threshold: number;
    readonly timeout: number;
}
