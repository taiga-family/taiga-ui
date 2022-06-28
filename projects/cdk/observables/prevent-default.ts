import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * @deprecated: use {@link tuiPreventDefault} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function preventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(event => event.preventDefault());
}

export const tuiPreventDefault = preventDefault;
