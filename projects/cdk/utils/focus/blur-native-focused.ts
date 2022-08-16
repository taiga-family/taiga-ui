import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

import {tuiGetNativeFocused} from './get-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function tuiBlurNativeFocused(documentRef: Document): void {
    const activeElement = tuiGetNativeFocused(documentRef);

    if (tuiIsHTMLElement(activeElement)) {
        activeElement.blur();
    }
}
