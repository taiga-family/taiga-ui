import type {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs';

export function tuiPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(event => event.preventDefault());
}
