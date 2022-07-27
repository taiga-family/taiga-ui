import {TuiDocumentSelectionException} from '@taiga-ui/cdk';

/**
 * Provides document.execCommand('insertHTML', false, html) support to unsupported browser,
 * taking Undo stack into account if possible
 *
 * @throws Will throw an error if selection could not be retrieved
 *
 * @param documentRef document to execute on
 * @param html html to be inserted
 */
export function tuiInsertHtml(documentRef: Document, html: string): void {
    if (documentRef.queryCommandSupported(`insertHTML`)) {
        documentRef.execCommand(`insertHTML`, false, html);

        return;
    }

    const selection = documentRef.getSelection();

    if (!selection) {
        throw new TuiDocumentSelectionException();
    }

    documentRef.execCommand(`ms-beginUndoUnit`);

    const range = selection.getRangeAt(0);
    const documentFragment = range.createContextualFragment(html);

    range.deleteContents();
    range.insertNode(documentFragment);

    documentRef.execCommand(`ms-endUndoUnit`);
}
