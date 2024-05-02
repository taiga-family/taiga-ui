import {ObservableInput, OperatorFunction} from 'rxjs';

export type TuiAlertQueueOperator = <T>() => OperatorFunction<ObservableInput<T>, T>;
