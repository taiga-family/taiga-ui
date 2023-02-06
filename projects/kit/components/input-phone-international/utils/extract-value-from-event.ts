import {getClipboardDataText} from '@taiga-ui/cdk';

/**
 * @deprecated: use {@link tuiExtractValueFromEvent} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function extractValueFromEvent(event: ClipboardEvent | DragEvent): string {
    // TODO: iframe warning
    return event instanceof DragEvent
        ? event.dataTransfer?.getData(`text/plain`) || ``
        : getClipboardDataText(event);
}

export const tuiExtractValueFromEvent = extractValueFromEvent;
