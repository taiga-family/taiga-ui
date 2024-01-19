import {isDevMode} from '@angular/core';

export class TuiOwnerDocumentException extends Error {
    constructor() {
        super(isDevMode() ? 'Element does not have ownerDocument' : '');
    }
}
