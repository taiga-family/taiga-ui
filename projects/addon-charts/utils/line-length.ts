import type {TuiPoint} from '@taiga-ui/core';

export function tuiLineLength(a: TuiPoint, b: TuiPoint): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
