import {getNativeFocused} from './get-native-focused';
import {setNativeFocused} from './set-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function blurNativeFocused(documentRef: Document): void {
    const activeElement = getNativeFocused(documentRef);

    // TODO: iframe warning
    if (activeElement instanceof HTMLElement) {
        setNativeFocused(activeElement, false);
    }
}
