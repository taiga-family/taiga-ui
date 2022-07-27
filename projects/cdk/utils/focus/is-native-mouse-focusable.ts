import {tuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';

/**
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function tuiIsNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute(`disabled`) &&
        (element.getAttribute(`tabIndex`) === `-1` ||
            tuiIsNativeKeyboardFocusable(element))
    );
}
