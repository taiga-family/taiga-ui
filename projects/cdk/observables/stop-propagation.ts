import type {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function tuiStopPropagation<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(e => {
        e.stopPropagation();
    });
}
