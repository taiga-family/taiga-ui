import {type MonoTypeOperatorFunction, tap} from 'rxjs';

export function tuiPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(event => event.preventDefault());
}
