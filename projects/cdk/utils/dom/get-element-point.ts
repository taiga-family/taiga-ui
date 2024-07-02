import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import type {TuiPoint} from '@taiga-ui/core/types';

export function tuiGetElementPoint(x: number, y: number, element: HTMLElement): TuiPoint {
    const {left, top, width, height} = element.getBoundingClientRect();

    return [tuiClamp(x - left, 0, width) / width, tuiClamp(y - top, 0, height) / height];
}
