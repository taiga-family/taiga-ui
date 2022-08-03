import {tuiGetNativeFocused} from './get-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function tuiBlurNativeFocused(documentRef: Document): void {
    const activeElement = tuiGetNativeFocused(documentRef);

    // TODO: iframe warning
    if (activeElement instanceof HTMLElement) {
        activeElement.blur();
    }
}
