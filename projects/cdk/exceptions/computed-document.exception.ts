export class TuiComputedDocumentException extends Error {
    constructor() {
        super(ngDevMode ? `Only use computedDocument after load event` : ``);
    }
}
