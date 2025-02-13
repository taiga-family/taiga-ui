import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

const ITEM_SIZE = 1.5;
const CONTENT_SIZE = 2.5;

/**
 * @deprecated: drop in v5.0
 */

export function tuiGetBorder(
    hasIcon: boolean,
    hasCleaner = false,
    hasTooltip = false,
    hasContent = false,
    size: TuiSizeL | TuiSizeS = 'm',
): number {
    const offset = size === 's' ? 0 : 0.25;
    let border = 0;

    if (hasIcon) {
        border += ITEM_SIZE + offset;
    }

    if (hasCleaner) {
        border += ITEM_SIZE + offset;
    }

    if (hasTooltip) {
        border += ITEM_SIZE + offset;
    }

    if (hasContent) {
        border += CONTENT_SIZE + offset;
    }

    return border;
}
