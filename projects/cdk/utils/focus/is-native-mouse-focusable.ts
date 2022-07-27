import {isNativeKeyboardFocusable} from './is-native-keyboard-focusable';

/**
 * @deprecated: use {@link tuiIsNativeMouseFocusable} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isNativeMouseFocusable(element: Element): boolean {
    return (
        !element.hasAttribute(`disabled`) &&
        (element.getAttribute(`tabIndex`) === `-1` || isNativeKeyboardFocusable(element))
    );
}

export const tuiIsNativeMouseFocusable = isNativeMouseFocusable;
