/**
 * Provides document.execCommand('insertText', false, text) support to unsupported browser,
 * taking Undo stack into account if possible
 *
 * @throws Will throw an error if selection could not be retrieved
 *
 * @param documentRef document to execute on
 * @param text text to be inserted
 */
export function tuiInsertText(documentRef: Document, text: string) {
    if (documentRef.queryCommandSupported('insertText')) {
        documentRef.execCommand('insertText', false, text);

        return;
    }

    const selection = documentRef.getSelection();

    if (!selection) {
        throw new Error('Failed to get document selection');
    }

    documentRef.execCommand('ms-beginUndoUnit');

    const range = selection.getRangeAt(0);

    range.deleteContents();
    range.insertNode(documentRef.createTextNode(text));

    documentRef.execCommand('ms-endUndoUnit');
}
