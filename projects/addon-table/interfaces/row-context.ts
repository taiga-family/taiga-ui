import {TuiContextWithImplicit} from '@taiga-ui/cdk';

export interface TuiRowContext<T> extends TuiContextWithImplicit<T> {
    readonly index: number;
}
