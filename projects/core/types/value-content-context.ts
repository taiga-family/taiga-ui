import type {TuiContext} from '@taiga-ui/cdk/types';

export interface TuiValueContentContext<T> extends TuiContext<T> {
    active: boolean;
}
