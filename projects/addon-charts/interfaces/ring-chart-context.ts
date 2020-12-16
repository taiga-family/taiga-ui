import {TuiContextWithImplicit} from '@taiga-ui/cdk';

export interface TuiRingChartContext extends TuiContextWithImplicit<number> {
    readonly value: readonly number[];
}
