import {Observer, Subject} from 'rxjs';

/* In RxJS 7 All subjects now have an observed property */
type SubjectRxJS7plus<T> = Subject<T> & {observed: boolean};

/* In RxJS 8 `observers` will be removed */
type SubjectRxJS6<T> = Subject<T> & {observers: Array<Observer<T>>};

export function tuiIsObserved<T>(observable: Subject<T>): boolean {
    return `observed` in observable
        ? (observable as SubjectRxJS7plus<T>).observed
        : !!(observable as SubjectRxJS6<T>)?.observers?.length;
}
