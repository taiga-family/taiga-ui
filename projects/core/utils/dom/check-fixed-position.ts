export function tuiCheckFixedPosition(element?: HTMLElement | null): boolean {
    return (
        !!element && (isFixed(element) || tuiCheckFixedPosition(element.parentElement))
    );
}

function isFixed(element: HTMLElement): boolean {
    return (
        element.ownerDocument.defaultView
            ?.getComputedStyle(element)
            .getPropertyValue('position') === 'fixed'
    );
}
