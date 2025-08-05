import {type TuiContext} from '@taiga-ui/cdk/types';

/**
 * Native CSS border-style options
 */
export type TuiLineType = 'dashed' | 'dotted' | 'hidden' | 'none' | 'solid';

export type TuiLineHandler = (index: number, total: number) => TuiLineType;

export interface TuiLineChartHintContext<T> extends TuiContext<T> {
    readonly index?: number;
}
