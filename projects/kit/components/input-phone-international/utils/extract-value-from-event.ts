import {tuiGetClipboardDataText} from '@taiga-ui/cdk';

export function tuiExtractValueFromEvent(event: DragEvent | ClipboardEvent): string {
    // TODO: iframe warning
    return event instanceof DragEvent
        ? event.dataTransfer?.getData(`text/plain`) || ``
        : tuiGetClipboardDataText(event);
}
