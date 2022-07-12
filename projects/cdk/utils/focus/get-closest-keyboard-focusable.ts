import {svgNodeFilter} from '@taiga-ui/cdk/constants';

import {isNativeKeyboardFocusable} from './is-native-keyboard-focusable';
import {isNativeMouseFocusable} from './is-native-mouse-focusable';

/**
 * @deprecated: use {@link tuiGetClosestFocusable} instead
 * Finds the closest element that can be focused with a keyboard or mouse in theory
 *
 * @param initial current HTML element
 * @param prev should it look backwards instead (find item that will be focused with Shift + Tab)
 * @param root top Node limiting the search area
 * @param keyboard determine if only keyboard focus is of interest
 *
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getClosestFocusable(
    initial: Element,
    prev: boolean = false,
    root: Node,
    keyboard: boolean = true,
): HTMLElement | null {
    if (!root.ownerDocument) {
        return null;
    }

    const check = keyboard ? isNativeKeyboardFocusable : isNativeMouseFocusable;

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

/**
 * @deprecated: use {@link tuiGetClosestFocusable} instead
 */
export const getClosestKeyboardFocusable = getClosestFocusable;

export const tuiGetClosestFocusable = getClosestFocusable;
