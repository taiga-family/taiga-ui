import {clamp} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';

export function tuiGetElementPoint(x: number, y: number, element: HTMLElement): TuiPoint {
    const {left, top, width, height} = element.getBoundingClientRect();

    return [clamp(x - left, 0, width) / width, clamp(y - top, 0, height) / height];
}
