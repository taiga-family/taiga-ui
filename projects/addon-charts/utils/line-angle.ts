import type {TuiPoint} from '@taiga-ui/core/types';

export function tuiLineAngle(a: TuiPoint | undefined, b: TuiPoint | undefined): number {
    const x = (b?.[0] || 0) - (a?.[0] || 0);
    const y = (b?.[1] || 0) - (a?.[1] || 0);

    return Math.atan2(y, x);
}
