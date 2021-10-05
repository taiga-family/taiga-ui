import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function stopPropagation<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(e => {
        e.stopPropagation();
    });
}
