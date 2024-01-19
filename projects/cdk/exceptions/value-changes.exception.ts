import {isDevMode} from '@angular/core';

export class TuiValueChangesException extends Error {
    constructor() {
        super(isDevMode() ? 'Control does not have valueChanges' : '');
    }
}
