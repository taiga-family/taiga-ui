const DEFAULT_FORMAT = 'text/plain';

/**
 * @deprecated: use {@link tuiGetClipboardDataText} instead
 * Gets text from data of clipboardEvent, it also works in IE and Edge browsers
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getClipboardDataText(
    event: ClipboardEvent,
    format: string = DEFAULT_FORMAT,
): string {
    return 'clipboardData' in event && event.clipboardData !== null
        ? event.clipboardData.getData(format) ||
              event.clipboardData.getData(DEFAULT_FORMAT)
        : (event as any).target.ownerDocument.defaultView.clipboardData.getData('text');
}

export const tuiGetClipboardDataText = getClipboardDataText;
