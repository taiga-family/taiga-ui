import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {OperatorFunction} from 'rxjs';
import {distinctUntilChanged, map, pipe, startWith, switchMap, timer} from 'rxjs';

/**
 * Operator to set lifespan after which current value is considered obsolete
 */
export function tuiIsAlive(lifespan = 0): OperatorFunction<unknown, boolean> {
    return pipe(
        switchMap(() => timer(lifespan).pipe(map(TUI_FALSE_HANDLER), startWith(true))),
        distinctUntilChanged(),
    );
}
