import {isDevMode} from '@angular/core';

export class TuiValuePresentException extends Error {
    constructor() {
        super(isDevMode() ? 'Value must present' : '');
    }
}
