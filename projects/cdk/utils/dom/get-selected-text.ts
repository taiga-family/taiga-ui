import {tuiIsFormFieldElement} from './is-form-field';

/**
 * @description:
 * cross browser way to get selected text
 *
 * History:
 * BUG - window.getSelection() fails when text selected in a form field
 * https://bugzilla.mozilla.org/show_bug.cgi?id=85686
 */
export function tuiGetSelectedText({getSelection, document}: Window): string | null {
    return tuiIsFormFieldElement(document.activeElement)
        ? document.activeElement.value.slice(
              document.activeElement.selectionStart || 0,
              document.activeElement.selectionEnd || 0,
          )
        : getSelection()?.toString() || null;
}
