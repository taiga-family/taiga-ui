export class TuiDocumentSelectionException extends Error {
    constructor() {
        super(ngDevMode ? `Failed to get document selection` : ``);
    }
}
