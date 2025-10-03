import {tuiIsNativeKeyboardFocusable} from './is-native-keyboard-focusable';

export function tuiIsMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute('disabled') &&
        (element.getAttribute('tabIndex') === '-1' ||
            tuiIsNativeKeyboardFocusable(element))
    );
}

export {
    /**
     * @deprecated use {@link tuiIsNativeMouseFocusable}
     */
    tuiIsMouseFocusable as tuiIsNativeMouseFocusable,
};
