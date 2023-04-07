import {TuiMedia} from '@taiga-ui/core/interfaces';
import {tuiGetViewportWidth} from '@taiga-ui/core/utils/dom';

export function tuiIsMobile(win: Window, {mobile}: TuiMedia): boolean {
    return tuiGetViewportWidth(win) < mobile;
}
