import {type TuiPoint} from '@taiga-ui/core/types';

import {tuiLineAngle} from './line-angle';
import {tuiLineLength} from './line-length';

export function tuiControlPoint(
    current?: TuiPoint,
    previous?: TuiPoint,
    next?: TuiPoint,
    reverse = false,
    smoothing = 0.2,
): TuiPoint {
    const fallback = current || ([0, 0] as const);
    const p = previous || current || ([0, 0] as const);
    const n = next || current || ([0, 0] as const);
    const angle = tuiLineAngle(p, n) + (reverse ? Math.PI : 0);
    const length = tuiLineLength(p, n) * smoothing;
    const x = fallback[0] + Math.cos(angle) * length;
    const y = fallback[1] + Math.sin(angle) * length;

    return [x, y];
}
