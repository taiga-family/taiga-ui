import type {TuiContext} from '@taiga-ui/cdk/types';

export interface TuiLineChartHintContext<T> extends TuiContext<T> {
    readonly index?: number;
}
