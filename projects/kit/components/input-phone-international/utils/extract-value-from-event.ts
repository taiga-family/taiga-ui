import {tuiGetClipboardDataText} from '@taiga-ui/cdk';

export function tuiExtractValueFromEvent(event: DragEvent | ClipboardEvent): string {
    return `dataTransfer` in event
        ? event.dataTransfer?.getData(`text/plain`) || ``
        : tuiGetClipboardDataText(event);
}
