import {isDevMode} from '@angular/core';

export class TuiComputedDocumentException extends Error {
    constructor() {
        super(isDevMode() ? 'Only use computedDocument after load event' : '');
    }
}
