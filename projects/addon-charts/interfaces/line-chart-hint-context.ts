import {type TuiContext} from '@taiga-ui/cdk';

export interface TuiLineChartHintContext<T> extends TuiContext<T> {
    readonly index?: number;
}
