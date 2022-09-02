import type {TuiPoint} from '@taiga-ui/core';

import {tuiDrawCurve} from './draw-curve';
import {tuiDrawLine} from './draw-line';

const COEFFICIENT = 500;

export function tuiDraw(
    array: readonly TuiPoint[],
    index: number,
    smoothing: number,
): string {
    return smoothing
        ? tuiDrawCurve(array, index, smoothing / COEFFICIENT)
        : tuiDrawLine([array[index][0], array[index][1]]);
}
