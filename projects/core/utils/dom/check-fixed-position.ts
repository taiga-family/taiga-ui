/**
 * @deprecated: use {@link tuiCheckFixedPosition} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function checkFixedPosition(element: HTMLElement | null): boolean {
    if (!element || typeof getComputedStyle === 'undefined') {
        return false;
    }

    const style = getComputedStyle(element);

    return (
        style.getPropertyValue('position') === 'fixed' ||
        checkFixedPosition(element.parentElement)
    );
}

export const tuiCheckFixedPosition = checkFixedPosition;
