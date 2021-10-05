import {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function preventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(e => {
        e.preventDefault();
    });
}
