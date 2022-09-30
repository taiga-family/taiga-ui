const ITEM_SIZE = 1.5;
const CONTENT_SIZE = 2.5;

export function tuiGetBorder(
    hasIcon: boolean,
    hasCleaner: boolean = false,
    hasTooltip: boolean = false,
    hasContent: boolean = false,
): number {
    let border = 0;

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
