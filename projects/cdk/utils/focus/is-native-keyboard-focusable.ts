import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';

/**
 * Checks for signs that element can be focused with keyboard. tabIndex above 0 is ignored to
 * only target natural focus order. Not checking the possibility of an element to
 * be focused, for example element can have display: none applied to it or any other
 * circumstances could prevent actual focus.
 */
export function tuiIsNativeKeyboardFocusable(element: Element): boolean {
    if (element.hasAttribute(`disabled`) || element.getAttribute(`tabIndex`) === `-1`) {
        return false;
    }

    if (
        (tuiIsHTMLElement(element) && element.isContentEditable) ||
        element.getAttribute(`tabIndex`) === `0`
    ) {
        return true;
    }

    switch (element.tagName) {
        case `BUTTON`:
        case `SELECT`:
        case `TEXTAREA`:
            return true;
        case `VIDEO`:
        case `AUDIO`:
            return element.hasAttribute(`controls`);
        case `INPUT`:
            return element.getAttribute(`type`) !== `hidden`;
        case `A`:
        case `LINK`:
            return element.hasAttribute(`href`);
        default:
            return false;
    }
}
