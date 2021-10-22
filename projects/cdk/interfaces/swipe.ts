export interface TuiSwipe {
    readonly direction: TuiSwipeDirection;
    readonly start: TouchEvent;
    readonly end: TouchEvent;
    readonly duration: number;
    readonly distanceX: number;
    readonly distanceY: number;
}

export type TuiSwipeDirection = 'left' | 'right' | 'top' | 'bottom';

export interface TuiSwipeOptions {
    readonly threshold: number;
    readonly timeout: number;
}
