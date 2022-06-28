import {TuiPoint} from '@taiga-ui/core';

import {drawCurve} from './draw-curve';
import {drawLine} from './draw-line';

const COEFFICIENT = 500;

/**
 * @deprecated: use {@link tuiDraw} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function draw(
    array: readonly TuiPoint[],
    index: number,
    smoothing: number,
): string {
    return smoothing
        ? drawCurve(array, index, smoothing / COEFFICIENT)
        : drawLine([array[index][0], array[index][1]]);
}

export const tuiDraw = draw;
