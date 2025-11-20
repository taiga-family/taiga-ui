import {svgNodeFilter} from '@taiga-ui/cdk/constants';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

import {tuiIsFocusable} from './is-focusable';

export interface TuiGetClosestFocusableOptions {
    /**
     * @description:
     * current HTML element
     */
    initial: Element;

    /**
     * @description:
     * should it look backwards instead (find item that will be focused with Shift + Tab)
     */
    previous?: boolean;

    /**
     * @description:
     * top Node limiting the search area
     */
    root: Node;
}

/**
 * @description:
 * Finds the closest element that can be focused with a keyboard or mouse in theory
 */
export function tuiGetClosestFocusable({
    initial,
    root,
    previous = false,
}: TuiGetClosestFocusableOptions): HTMLElement | null {
    if (!root.ownerDocument) {
        return null;
    }

    const treeWalker = root.ownerDocument.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT,
        svgNodeFilter,
    );

    treeWalker.currentNode = initial;

    do {
        if (tuiIsHTMLElement(treeWalker.currentNode)) {
            initial = treeWalker.currentNode;
        }

        if (tuiIsHTMLElement(initial) && tuiIsFocusable(initial)) {
            return initial;
        }
    } while (previous ? treeWalker.previousNode() : treeWalker.nextNode());

    return null;
}
