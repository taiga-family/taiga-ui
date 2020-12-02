import {TuiContextWithImplicit} from '@taiga-ui/cdk';

export interface TuiRingChartContext extends TuiContextWithImplicit<number | null> {
    readonly value: ReadonlyArray<number>;
}
