import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiStopPropagation} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function stopPropagation<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(e => {
        e.stopPropagation();
    });
}

export const tuiStopPropagation = stopPropagation;
