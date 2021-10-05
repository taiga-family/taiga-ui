import {isNativeKeyboardFocusable} from './is-native-keyboard-focusable';

export function isNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' || isNativeKeyboardFocusable(element))
    );
}
