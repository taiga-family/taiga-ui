export function isElementEditable(element: HTMLElement): boolean {
    // TODO: iframe warning
    return (
        (element instanceof HTMLInputElement && !element.readOnly) ||
        (element instanceof HTMLTextAreaElement && !element.readOnly) ||
        element.isContentEditable
    );
}
