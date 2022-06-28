import {TuiPoint} from '@taiga-ui/core';

/**
 * @deprecated: use {@link tuiLineLength} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function lineLength(a: TuiPoint, b: TuiPoint): number {
    const x = b[0] - a[0];
    const y = b[1] - a[1];

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export const tuiLineLength = lineLength;
