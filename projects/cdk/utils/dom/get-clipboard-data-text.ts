const DEFAULT_FORMAT = `text/plain`;

/**
 * Gets text from data of clipboardEvent, it also works in IE and Edge browsers
 */
export function tuiGetClipboardDataText(
    event: ClipboardEvent,
    format: string = DEFAULT_FORMAT,
): string {
    return `clipboardData` in event && event.clipboardData !== null
        ? event.clipboardData.getData(format) ||
              event.clipboardData.getData(DEFAULT_FORMAT)
        : // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
          ((event as any).target.ownerDocument.defaultView.clipboardData.getData(
              `text`,
          ) as string);
}
