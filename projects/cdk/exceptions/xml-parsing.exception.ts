import {isDevMode} from '@angular/core';

export class TuiXmlParsingException extends Error {
    constructor() {
        super(isDevMode() ? 'Error parsing XML string' : '');
    }
}
