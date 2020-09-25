import {svgNodeFilter} from '@taiga-ui/cdk/constants';
import {isNativeKeyboardFocusable} from './is-native-keyboard-focusable';

/**
 * Finds closest element that can be focused with a keyboard in theory
 *
 * @param initial current HTML element
 * @param prev should it look backwards instead (find item that will be focused with Shift + Tab)
 * @param root top Node limiting the search area
 */
export function getClosestKeyboardFocusable(
    initial: HTMLElement,
    prev: boolean = false,
    root: Node,
): HTMLElement | null {
    if (!root.ownerDocument) {
        return null;
    }

    // Deprecated but ony this overload works in IE
    // Filter must be a function in IE, other modern browsers are compliant to this format
    const treeWalker = root.ownerDocument.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        svgNodeFilter,
        false,
    );

    treeWalker.currentNode = initial;

    while (prev ? treeWalker.previousNode() : treeWalker.nextNode()) {
        if (treeWalker.currentNode instanceof HTMLElement) {
            initial = treeWalker.currentNode;
        }

        if (isNativeKeyboardFocusable(initial)) {
            return initial;
        }
    }

    return null;
}
