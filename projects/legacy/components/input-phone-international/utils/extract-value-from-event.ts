import {tuiGetClipboardDataText} from '@taiga-ui/cdk/utils/dom';

/**
 * @deprecated: drop in v5.0
 */
export function tuiExtractValueFromEvent(event: ClipboardEvent | DragEvent): string {
    return 'dataTransfer' in event
        ? (event.dataTransfer?.getData('text/plain') ?? '')
        : tuiGetClipboardDataText(event);
}
