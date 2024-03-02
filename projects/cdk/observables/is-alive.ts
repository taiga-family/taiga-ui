import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {
    distinctUntilChanged,
    map,
    type OperatorFunction,
    pipe,
    startWith,
    switchMap,
    timer,
} from 'rxjs';

/**
 * Operator to set lifespan after which current value is considered obsolete
 */
export function tuiIsAlive(lifespan = 0): OperatorFunction<unknown, boolean> {
    return pipe(
        switchMap(() => timer(lifespan).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true))),
        distinctUntilChanged(),
    );
}
