export class TuiOwnerDocumentException extends Error {
    constructor() {
        super(`Element does not have ownerDocument`);
    }
}
