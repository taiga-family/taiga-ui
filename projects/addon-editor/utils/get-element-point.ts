import {clamp} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';

/**
 * @deprecated: use {@link tuiGetElementPoint} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getElementPoint(x: number, y: number, element: HTMLElement): TuiPoint {
    const {left, top, width, height} = element.getBoundingClientRect();

    return [clamp(x - left, 0, width) / width, clamp(y - top, 0, height) / height];
}

export const tuiGetElementPoint = getElementPoint;
