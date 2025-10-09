import {tuiIsKeyboardFocusable} from './is-native-keyboard-focusable';

export function tuiIsMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' || tuiIsKeyboardFocusable(element))
    );
}
