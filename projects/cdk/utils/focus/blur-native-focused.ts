import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

import {tuiGetFocused} from './get-native-focused';

/**
 * Finds and blurs current active element, including shadow DOM
 */
export function tuiBlurFocused(doc: Document): void {
    const activeElement = tuiGetFocused(doc);

    if (tuiIsHTMLElement(activeElement)) {
        activeElement.blur();
    }
}
