import type {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';

export interface TuiMonthContext {
    value: TuiMonth | TuiMonthRange | null;
}
