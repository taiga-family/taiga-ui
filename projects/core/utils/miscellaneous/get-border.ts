const BORDER_SMALL = 12;
const BORDER_LARGE = 16;
const ITEM_SIZE = 24;
const CONTENT_SIZE = 40;

export function getBorder(
    sizeBig: boolean,
    hasIcon: boolean,
    hasCleaner: boolean = false,
    hasTooltip: boolean = false,
    hasContent: boolean = false,
): number {
    let border = sizeBig ? BORDER_LARGE : BORDER_SMALL;

    if (hasIcon) {
        border += ITEM_SIZE;
    }

    if (hasCleaner) {
        border += ITEM_SIZE;
    }

    if (hasTooltip) {
        border += ITEM_SIZE;
    }

    if (hasContent) {
        border += CONTENT_SIZE;
    }

    return border;
}
