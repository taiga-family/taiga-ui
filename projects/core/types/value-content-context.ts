import type {TuiContext} from '@taiga-ui/cdk';

export interface TuiValueContentContext<T> extends TuiContext<T> {
    active: boolean;
}
