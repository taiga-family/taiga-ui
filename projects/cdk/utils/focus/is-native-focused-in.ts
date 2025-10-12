import {tuiGetFocused} from './get-native-focused';

/**
 * Checks if focused element is within given element.
 *
 * @param node
 * @return true if focused node is contained within element
 */
export function tuiIsFocusedIn(node?: Node | null): boolean {
    const focused = node?.ownerDocument && tuiGetFocused(node.ownerDocument);

    return !!focused && node.contains(focused) && node.ownerDocument?.hasFocus();
}
