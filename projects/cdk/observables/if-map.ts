import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import type {Observable, OperatorFunction} from 'rxjs';
import {EMPTY, pipe} from 'rxjs';
import {switchMap} from 'rxjs/operators';

export function tuiIfMap<T, G>(
    project: (value: T) => Observable<G>,
    predicate: TuiBooleanHandler<T> = Boolean,
): OperatorFunction<T, G> {
    return pipe(switchMap(value => (predicate(value) ? project(value) : EMPTY)));
}
