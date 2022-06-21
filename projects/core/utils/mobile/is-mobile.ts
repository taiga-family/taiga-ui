import {TuiMedia} from '@taiga-ui/core/interfaces';

export function tuiIsMobile({innerWidth}: Window, {mobile}: TuiMedia): boolean {
    return innerWidth <= mobile;
}
