import {tuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';

export function tuiIsNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute(`disabled`) &&
        (element.getAttribute(`tabIndex`) === `-1` ||
            tuiIsNativeKeyboardFocusable(element))
    );
}
