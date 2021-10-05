import {TuiPoint} from '@taiga-ui/core';
import {controlPoint} from './control-point';

export function drawCurve(
    array: ReadonlyArray<TuiPoint>,
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
