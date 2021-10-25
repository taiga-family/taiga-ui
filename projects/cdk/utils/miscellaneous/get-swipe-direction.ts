import {TuiSwipeDirection} from '@taiga-ui/cdk/interfaces';

export function getSwipeDirection(deltaX: number, deltaY: number): TuiSwipeDirection {
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return deltaY > 0 ? 'top' : 'bottom';
    } else {
        return deltaX > 0 ? 'left' : 'right';
    }
}
