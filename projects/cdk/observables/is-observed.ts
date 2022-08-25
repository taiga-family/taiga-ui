import {Subject} from 'rxjs';

/**
 * In RxJS 8 `observers` will be removed, this util is for future safety
 */
export function tuiIsObserved<T>(observable: Subject<T>): boolean {
    return (observable as any).observed || !!observable.observers.length;
}
