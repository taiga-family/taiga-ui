export class TuiComputedDocumentException extends Error {
    constructor() {
        super(`Only use computedDocument after load event`);
    }
}
