const PADDING_SMALL = 12;
const PADDING_LARGE = 16;
const ITEM_SIZE = 24;
const CONTENT_SIZE = 40;

export function getPadding(
    sizeBig: boolean,
    hasIcon: boolean,
    hasCleaner: boolean = false,
    hasTooltip: boolean = false,
    hasContent: boolean = false,
): number {
    let padding = sizeBig ? PADDING_LARGE : PADDING_SMALL;

    if (hasIcon) {
        padding += ITEM_SIZE;
    }

    if (hasCleaner) {
        padding += ITEM_SIZE;
    }

    if (hasTooltip) {
        padding += ITEM_SIZE;
    }

    if (hasContent) {
        padding += CONTENT_SIZE;
    }

    return padding;
}
