import type {TuiHorizontalDirection} from '@taiga-ui/core';

/**
 * @internal
 */
export function tuiHorizontalDirectionToNumber(
    direction: TuiHorizontalDirection,
): -1 | 1 {
    switch (direction) {
        case `left`:
            return -1;
        case `right`:
            return 1;
    }
}
