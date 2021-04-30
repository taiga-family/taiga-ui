export function isElementEditable(element: HTMLElement): boolean {
    return (
        (element instanceof HTMLInputElement && !element.readOnly) ||
        (element instanceof HTMLTextAreaElement && !element.readOnly) ||
        element.isContentEditable
    );
}
