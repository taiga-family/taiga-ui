import {svgNodeFilter} from '@taiga-ui/cdk/constants';

import {tuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';
import {tuiIsNativeMouseFocusable} from './is-native-mouse-focusable';

/**
 * @deprecated: use {@link tuiGetClosestFocusableElement} instead
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
    initial: HTMLElement,
    prev: boolean = false,
    root: Node,
    keyboard: boolean = true,
): HTMLElement | null {
    return tuiGetClosestFocusableElement({initial, root, prev, keyboard});
}

/**
 * @deprecated: use {@link tuiGetClosestFocusableElement} instead
 */
export const getClosestKeyboardFocusable = getClosestFocusable;

/**
 * @deprecated: use {@link tuiGetClosestFocusableElement} instead
 */
export const tuiGetClosestFocusable = getClosestFocusable;

export interface TuiGetClosestFocusableElementOptions {
    initial: Element;
    root: Node;
    prev?: boolean;
    keyboard?: boolean;
}

export function tuiGetClosestFocusableElement({
    initial,
    root,
    prev = false,
    keyboard = true,
}: TuiGetClosestFocusableElementOptions): HTMLElement | null {
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

        if (check(initial)) {
            return initial as unknown as HTMLElement;
        }
    }

    return null;
}
