import {TuiPoint} from '@taiga-ui/core';

export function tuiLineAngle(a: TuiPoint, b: TuiPoint): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];

    return Math.atan2(y, x);
}
