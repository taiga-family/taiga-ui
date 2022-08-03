export function tuiScrollToElement(element: HTMLElement, container: HTMLElement): void {
    const scrolledWidth = container.offsetWidth + container.scrollLeft;
    const elementWidth = element.offsetWidth;
    const elementX =
        container.scrollLeft +
        element.getBoundingClientRect().left -
        container.getBoundingClientRect().left;
    const elementDidNotFitRight = elementX + elementWidth > scrolledWidth;
    const elementDidNotFitLeft = container.scrollLeft > elementX;
    const deltaXRight = elementX + elementWidth - scrolledWidth;
    const deltaXLeft = elementX - container.scrollLeft;

    if (elementDidNotFitRight) {
        container.scrollLeft += deltaXRight;
    }

    if (elementDidNotFitLeft) {
        container.scrollLeft += deltaXLeft;
    }
}
