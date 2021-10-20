export interface TuiSwipe {
    readonly direction: TuiSwipeDirection;
    readonly start: TouchEvent;
    readonly end: TouchEvent;
}

export type TuiSwipeDirection = 'left' | 'right' | 'top' | 'bottom';

export interface TuiSwipeOptions {
    readonly treshold: number;
    readonly timeout: number;
}
