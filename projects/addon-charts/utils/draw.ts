import {TuiPoint} from '@taiga-ui/core';
import {drawCurve} from './draw-curve';
import {drawLine} from './draw-line';

const COEFFICIENT = 500;

export function draw(
    array: ReadonlyArray<TuiPoint>,
    index: number,
    smoothing: number,
): string {
    return smoothing
        ? drawCurve(array, index, smoothing / COEFFICIENT)
        : drawLine([array[index][0], array[index][1]]);
}
