import {TuiLineType} from '@taiga-ui/addon-charts/enums';

export type TuiLineHandler = (index: number, total: number) => TuiLineType;
