import {tuiIsTextfield} from './element-checks';

export function tuiIsElementEditable(element: HTMLElement): boolean {
    return (
        (tuiIsTextfield(element) && !element.readOnly && element.inputMode !== 'none') ||
        Boolean(element.isContentEditable)
    );
}
