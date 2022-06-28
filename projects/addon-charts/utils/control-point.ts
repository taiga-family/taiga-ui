import {TuiPoint} from '@taiga-ui/core';

import {lineAngle} from './line-angle';
import {lineLength} from './line-length';

/**
 * @deprecated: use {@link tuiControlPoint} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function controlPoint(
    current: TuiPoint,
    previous?: TuiPoint,
    next?: TuiPoint,
    reverse: boolean = false,
    smoothing: number = 0.2,
): TuiPoint {
    const p = previous || current;
    const n = next || current;
    const angle = lineAngle(p, n) + (reverse ? Math.PI : 0);
    const length = lineLength(p, n) * smoothing;
    const x = current[0] + Math.cos(angle) * length;
    const y = current[1] + Math.sin(angle) * length;

    return [x, y];
}

export const tuiControlPoint = controlPoint;
