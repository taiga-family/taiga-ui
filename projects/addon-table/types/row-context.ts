import type {TuiContext} from '@taiga-ui/cdk';

export interface TuiRowContext<T> extends TuiContext<T> {
    readonly index: number;
}
