import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {EMPTY, type Observable, type OperatorFunction, pipe, switchMap} from 'rxjs';

export function tuiIfMap<T, G>(
    project: (value: T) => Observable<G>,
    predicate: TuiBooleanHandler<T> = Boolean,
): OperatorFunction<T, G> {
    return pipe(switchMap(value => (predicate(value) ? project(value) : EMPTY)));
}
