import {TuiLineTypeT} from './line-type';

export type TuiLineHandler = (index: number, total: number) => TuiLineTypeT;
