import type {TuiContextWithImplicit} from '@taiga-ui/cdk';

export interface TuiLineChartHintContext<T> extends TuiContextWithImplicit<T> {
    readonly index?: number;
}
