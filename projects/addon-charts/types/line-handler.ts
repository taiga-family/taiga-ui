import {TuiLineType} from './line-type';

export type TuiLineHandler = (index: number, total: number) => TuiLineType;
