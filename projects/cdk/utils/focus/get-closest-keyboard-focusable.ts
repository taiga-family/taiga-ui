import {svgNodeFilter} from '@taiga-ui/cdk/constants';

import {tuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';
import {tuiIsNativeMouseFocusable} from './is-native-mouse-focusable';

/**
 * Finds the closest element that can be focused with a keyboard or mouse in theory
 *
 * @param initial current HTML element
 * @param prev should it look backwards instead (find item that will be focused with Shift + Tab)
 * @param root top Node limiting the search area
 * @param keyboard determine if only keyboard focus is of interest
 *
 */
export function tuiGetClosestFocusable(
    initial: Element,
    prev: boolean = false,
    root: Node,
    keyboard: boolean = true,
): HTMLElement | null {
    if (!root.ownerDocument) {
        return null;
    }

    const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;

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
        // TODO: iframe warning
        if (treeWalker.currentNode instanceof HTMLElement) {
            initial = treeWalker.currentNode;
        }

        // TODO: iframe warning
        if (check(initial) && initial instanceof HTMLElement) {
            return initial;
        }
    }

    return null;
}
