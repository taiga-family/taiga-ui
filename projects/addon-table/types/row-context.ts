import type {TuiContext} from '@taiga-ui/cdk/types';

export interface TuiRowContext<T> extends TuiContext<T> {
    readonly index: number;
}
