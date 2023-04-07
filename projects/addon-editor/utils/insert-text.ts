import {TuiDocumentSelectionException} from '@taiga-ui/cdk';

/**
 * Provides document.execCommand('insertText', false, text) support to unsupported browser,
 * taking Undo stack into account if possible
 *
 * @throws Will throw an error if selection could not be retrieved
 *
 * @param doc document to execute on
 * @param text text to be inserted
 */
export function tuiInsertText(doc: Document, text: string): void {
    if (doc.queryCommandSupported(`insertText`)) {
        doc.execCommand(`insertText`, false, text);

        return;
    }

    const selection = doc.getSelection();

    if (!selection) {
        throw new TuiDocumentSelectionException();
    }

    doc.execCommand(`ms-beginUndoUnit`);

    const range = selection.getRangeAt(0);

    range.deleteContents();
    range.insertNode(doc.createTextNode(text));

    doc.execCommand(`ms-endUndoUnit`);
}
