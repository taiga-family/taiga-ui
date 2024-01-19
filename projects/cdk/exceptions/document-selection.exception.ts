import {isDevMode} from '@angular/core';

export class TuiDocumentSelectionException extends Error {
    constructor() {
        super(isDevMode() ? 'Failed to get document selection' : '');
    }
}
