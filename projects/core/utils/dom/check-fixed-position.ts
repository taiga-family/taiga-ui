export function tuiCheckFixedPosition(element?: HTMLElement | null): boolean {
    return (
        element?.ownerDocument.defaultView
            ?.getComputedStyle(element)
            .getPropertyValue('position') === 'fixed' ||
        tuiCheckFixedPosition(element?.parentElement)
    );
}
