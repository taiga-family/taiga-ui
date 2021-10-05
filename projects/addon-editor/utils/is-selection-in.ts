import {isNodeIn} from '@taiga-ui/cdk';

/**
 * Checks if selection is inside a specific selector
 * @param selection
 * @param selector
 * @return true if selection is completely inside a particular selector
 */
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
