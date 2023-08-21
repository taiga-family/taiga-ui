import {tuiIsString} from './is-string';

export function tuiDefaultSort<T>(x: T, y: T): number {
    if (x === y) {
        return 0;
    }

    if (tuiIsString(x) && tuiIsString(y)) {
        return x.localeCompare(y);
    }

    return x > y ? 1 : -1;
}
