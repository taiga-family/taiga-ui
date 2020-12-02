import {TuiLineType} from '@taiga-ui/addon-charts/enums';
import {TuiLineHandler} from '@taiga-ui/addon-charts/types';

export const TUI_ALWAYS_DASHED: TuiLineHandler = () => TuiLineType.Dashed;
export const TUI_ALWAYS_DOTTED: TuiLineHandler = () => TuiLineType.Dotted;
export const TUI_ALWAYS_SOLID: TuiLineHandler = () => TuiLineType.Solid;
export const TUI_ALWAYS_NONE: TuiLineHandler = () => TuiLineType.None;
