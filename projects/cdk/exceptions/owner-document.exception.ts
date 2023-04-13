export class TuiOwnerDocumentException extends Error {
    constructor() {
        super(ngDevMode ? `Element does not have ownerDocument` : ``);
    }
}
