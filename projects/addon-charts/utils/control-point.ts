import {TuiPoint} from '@taiga-ui/core';

import {tuiLineAngle} from './line-angle';
import {tuiLineLength} from './line-length';

export function tuiControlPoint(
    current: TuiPoint,
    previous?: TuiPoint,
    next?: TuiPoint,
    reverse: boolean = false,
    smoothing: number = 0.2,
): TuiPoint {
    const p = previous || current;
    const n = next || current;
    const angle = tuiLineAngle(p, n) + (reverse ? Math.PI : 0);
    const length = tuiLineLength(p, n) * smoothing;
    const x = current[0] + Math.cos(angle) * length;
    const y = current[1] + Math.sin(angle) * length;

    return [x, y];
}
