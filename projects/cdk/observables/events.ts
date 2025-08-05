import {type MonoTypeOperatorFunction, tap} from 'rxjs';

export function tuiPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap((event) => event.preventDefault());
}

export function tuiStopPropagation<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap((event) => event.stopPropagation());
}
