import {isNodeIn} from '@taiga-ui/cdk';

/**
 * @deprecated: use {@link tuiIsSelectionIn} instead
 * Checks if selection is inside a specific selector
 * @param selection
 * @param selector
 * @return true if selection is completely inside a particular selector
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isSelectionIn(
    {anchorNode, focusNode}: Selection,
    selector: string,
): boolean {
    // Even though focusNode/anchor-node are defined as Node, they can be null on initial nested document query
    return (
        !!anchorNode &&
        !!focusNode &&
        isNodeIn(anchorNode, selector) &&
        isNodeIn(focusNode, selector)
    );
}

export const tuiIsSelectionIn = isSelectionIn;
