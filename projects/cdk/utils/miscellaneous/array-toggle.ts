import {tuiArrayRemove} from './array-remove';

export function tuiArrayToggle<T>(array: readonly T[], item: T): T[] {
    const index = array.indexOf(item);

    return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
