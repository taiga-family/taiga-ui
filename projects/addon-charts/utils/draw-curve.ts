import {TuiPoint} from '@taiga-ui/core';

import {controlPoint} from './control-point';

/**
 * @deprecated: use {@link tuiDrawCurve} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function drawCurve(
    array: readonly TuiPoint[],
    index: number,
    smoothing: number,
): string {
    const [cpsX, cpsY] = controlPoint(
        array[index - 1],
        array[index - 2],
        array[index],
        false,
        smoothing,
    );
    const [cpeX, cpeY] = controlPoint(
        array[index],
        array[index - 1],
        array[index + 1],
        true,
        smoothing,
    );

    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${array[index][0]},${array[index][1]}`;
}

export const tuiDrawCurve = drawCurve;
