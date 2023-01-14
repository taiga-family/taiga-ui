import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {OperatorFunction, pipe, timer} from 'rxjs';
import {distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';

/**
 * Operator to set lifespan after which current value is considered obsolete
 */
export function tuiIsAlive(lifespan: number = 0): OperatorFunction<unknown, boolean> {
    return pipe(
        switchMap(() => timer(lifespan).pipe(map(ALWAYS_FALSE_HANDLER), startWith(true))),
        distinctUntilChanged(),
    );
}
