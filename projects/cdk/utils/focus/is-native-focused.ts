import {tuiGetFocused} from './get-native-focused';

/**
 * Checks if element is focused.
 *
 * Could return true even after blur since element remains focused if you switch away from a browser tab.
 *
 * @param node or null (as a common return value of DOM nodes walking)
 * @return true if focused
 */
export function tuiIsFocused(node?: Node | null): boolean {
    return (
        !!node?.ownerDocument &&
        tuiGetFocused(node.ownerDocument) === node &&
        node.ownerDocument.hasFocus()
    );
}
