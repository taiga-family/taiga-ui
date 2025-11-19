import {tuiIsFocused} from './is-focused';

/**
 * Utility method for moving focus in a list of elements
 *
 * @param currentIndex currently focused index
 * @param elements array of focusable elements
 * @param step a step to move focus by, typically -1 or 1
 */
export function tuiMoveFocus(
    currentIndex: number,
    elements: readonly HTMLElement[],
    step: number,
): void {
    currentIndex += step;

    while (currentIndex >= 0 && currentIndex < elements.length) {
        elements[currentIndex]?.focus();

        if (tuiIsFocused(elements[currentIndex])) {
            return;
        }

        currentIndex += step;
    }
}
