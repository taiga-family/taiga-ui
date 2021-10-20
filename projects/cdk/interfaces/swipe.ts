import {TuiEventWith} from '../types';

export interface TuiSwipe {
    readonly direction: TuiSwipeDirection;
    readonly start: TuiEventWith<TouchEvent, Element | Document>;
    readonly end: TuiEventWith<TouchEvent, Element | Document>;
}

export type TuiSwipeDirection = 'left' | 'right' | 'top' | 'bottom';

export interface TuiSwipeOptions {
    readonly treshold: number;
    readonly timeout: number;
}
