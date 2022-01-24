import {getClipboardDataText} from '@taiga-ui/cdk';

export function extractValueFromEvent(event: DragEvent | ClipboardEvent): string {
    // TODO: iframe warning
    return event instanceof DragEvent
        ? event.dataTransfer?.getData('text/plain') || ''
        : getClipboardDataText(event);
}
