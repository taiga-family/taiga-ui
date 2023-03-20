import {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {EMPTY, Observable, OperatorFunction, pipe} from 'rxjs';
import {switchMap} from 'rxjs/operators';

export function tuiIfMap<T, G>(
    project: (value: T) => Observable<G>,
    predicate: TuiBooleanHandler<T> = Boolean,
): OperatorFunction<T, G> {
    return pipe(switchMap(value => (predicate(value) ? project(value) : EMPTY)));
}
