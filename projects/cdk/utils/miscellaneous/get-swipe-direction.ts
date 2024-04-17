import type {TuiSwipeDirection} from '@taiga-ui/cdk/types';

export function tuiGetSwipeDirection(deltaX: number, deltaY: number): TuiSwipeDirection {
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return deltaY > 0 ? 'top' : 'bottom';
    }

    return deltaX > 0 ? 'left' : 'right';
}
