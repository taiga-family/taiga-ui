/**
 * Returns the horizontal scroll position that centers an element inside its container.
 * Supports LTR and negative-scrollLeft RTL layouts.
 */
export function tuiGetCenteredScrollLeft(
    container: HTMLElement,
    element: HTMLElement,
): number {
    const {left: containerLeft} = container.getBoundingClientRect();
    const {left: elementLeft, width} = element.getBoundingClientRect();

    return (
        container.scrollLeft +
        elementLeft -
        containerLeft -
        container.clientLeft +
        (width - container.clientWidth) / 2
    );
}
