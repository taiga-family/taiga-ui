export function tuiCheckFixedPosition(element: HTMLElement | null): boolean {
    if (!element || typeof getComputedStyle === `undefined`) {
        return false;
    }

    const style = getComputedStyle(element);

    return (
        style.getPropertyValue(`position`) === `fixed` ||
        tuiCheckFixedPosition(element.parentElement)
    );
}
