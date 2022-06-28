import {getNativeFocused} from './get-native-focused';

/**
 * @deprecated: use {@link tuiIsNativeFocusedIn} instead
 * Checks if focused element is within given element.
 *
 * @param node
 * @return true if focused node is contained within element
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isNativeFocusedIn(node: Node): boolean {
    // !node.contains - check for IE11
    if (!node.ownerDocument || !node.contains) {
        return false;
    }

    const nativeFocused = getNativeFocused(node.ownerDocument);

    return nativeFocused !== null && node.contains(nativeFocused);
}

export const tuiIsNativeFocusedIn = isNativeFocusedIn;
