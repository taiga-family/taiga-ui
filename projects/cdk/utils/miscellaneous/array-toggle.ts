import type {TuiIdentityMatcher} from '@taiga-ui/cdk/types';

import {tuiArrayRemove} from './array-remove';

export function tuiArrayToggle<T>(
    array: readonly T[],
    item: T,
    identity?: TuiIdentityMatcher<T>,
): T[] {
    const index = identity
        ? array.findIndex((it) => identity(it, item))
        : array.indexOf(item);

    return index === -1 ? [...array, item] : tuiArrayRemove(array, index);
}
