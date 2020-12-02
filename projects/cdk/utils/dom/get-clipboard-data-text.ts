/**
 * Gets text from data of clipboardEvent, it also works in IE and Edge browsers
 */
export function getClipboardDataText(
    event: ClipboardEvent,
    format: string = 'text/plain',
): string {
    return 'clipboardData' in event && event.clipboardData !== null
        ? event.clipboardData.getData(format)
        : (event as any).target.ownerDocument.defaultView.clipboardData.getData('text');
}
