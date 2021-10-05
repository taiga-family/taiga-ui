import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {DEFAULT_COLORS} from './default-colors';

/** @deprecated use CSS variables */
export const TUI_DEFAULT_COLOR_HANDLER: TuiColorHandler = index => DEFAULT_COLORS[index];
