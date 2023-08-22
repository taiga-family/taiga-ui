import type {TuiYear} from './year';

export function tuiDateClamp<T extends TuiYear>(date: T, min?: T, max?: T): T {
    if (max && max < date) {
        return max;
    }

    if (min && min > date) {
        return min;
    }

    return date;
}
