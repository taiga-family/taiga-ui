import {svgNodeFilter} from '@taiga-ui/cdk/constants';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

import {tuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';
import {tuiIsNativeMouseFocusable} from './is-native-mouse-focusable';

export interface TuiGetClosestFocusableOptions {
    /**
     * @description:
     * current HTML element
     */
    initial: Element;

    /**
     * @description:
     * top Node limiting the search area
     */
    root: Node;

    /**
     * @description:
     * should it look backwards instead (find item that will be focused with Shift + Tab)
     */
    previous?: boolean;

    /**
     * @description:
     * determine if only keyboard focus is of interest
     */
    keyboard?: boolean;
}

/**
 * @description:
 * Finds the closest element that can be focused with a keyboard or mouse in theory
 */
export function tuiGetClosestFocusable({
    initial,
    root,
    previous = false,
    keyboard = true,
}: TuiGetClosestFocusableOptions): HTMLElement | null {
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

    while (previous ? treeWalker.previousNode() : treeWalker.nextNode()) {
        if (tuiIsHTMLElement(treeWalker.currentNode)) {
            initial = treeWalker.currentNode;
        }

        if (tuiIsHTMLElement(initial) && check(initial)) {
            return initial;
        }
    }

    return null;
}
