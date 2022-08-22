import {svgNodeFilter} from '@taiga-ui/cdk/constants';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

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
    root: Node,
    prev: boolean = false,
    keyboard: boolean = true,
): HTMLElement | null {
    if (!root.ownerDocument) {
        return null;
    }

    const check = keyboard ? tuiIsNativeKeyboardFocusable : tuiIsNativeMouseFocusable;
    const treeWalker = root.ownerDocument.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        svgNodeFilter,
    );

    treeWalker.currentNode = initial;

    while (prev ? treeWalker.previousNode() : treeWalker.nextNode()) {
        if (tuiIsHTMLElement(treeWalker.currentNode)) {
            initial = treeWalker.currentNode;
        }

        if (check(initial) && tuiIsHTMLElement(initial)) {
            return initial;
        }
    }

    return null;
}
