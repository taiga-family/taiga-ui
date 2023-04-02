import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';

import {tuiGetNativeFocused} from './get-native-focused';

/**
 * Checks if focused element is within given element.
 *
 * @param node
 * @return true if focused node is contained within element
 */
export function tuiIsNativeFocusedIn(node: Node): boolean {
    // !node.contains - check for IE11
    if (!node.ownerDocument || !tuiIsPresent(node.contains)) {
        return false;
    }

    const nativeFocused = tuiGetNativeFocused(node.ownerDocument);

    return nativeFocused !== null && node.contains(nativeFocused);
}
