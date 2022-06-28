import {TuiPoint} from '@taiga-ui/core';

/**
 * @deprecated: use {@link tuiLineAngle} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function lineAngle(a: TuiPoint, b: TuiPoint): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];

    return Math.atan2(y, x);
}

export const tuiLineAngle = lineAngle;
