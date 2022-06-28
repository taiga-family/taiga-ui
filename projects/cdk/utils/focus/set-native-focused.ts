/**
 * @deprecated: use native element.focus()
 * TODO: remove in v3.0
 * Focuses or blurs and element
 *
 * @param element native element
 * @param focused boolean focused state
 * @param preventScroll optional flag to prevent native scroll to the element
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function setNativeFocused(
    element: HTMLOrSVGElement,
    focused: boolean = true,
    preventScroll: boolean = false,
): void {
    if (focused) {
        element.focus({preventScroll});
    } else {
        element.blur();
    }
}
