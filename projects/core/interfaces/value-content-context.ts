import type {TuiContextWithImplicit} from '@taiga-ui/cdk';

export interface TuiValueContentContext<T> extends TuiContextWithImplicit<T> {
    active: boolean;
}
