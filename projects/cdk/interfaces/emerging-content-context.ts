import {TuiContextWithImplicit} from './context-with-implicit';

export interface TuiEmergingContentContext<T, O = void, I = undefined>
    extends TuiContextWithImplicit<T> {
    readonly label: string;
    readonly data: I;
    readonly closeHook: () => void;
    readonly emitHook: (data: O) => void;
    readonly emitAndCloseHook: (data: O) => void;
}
