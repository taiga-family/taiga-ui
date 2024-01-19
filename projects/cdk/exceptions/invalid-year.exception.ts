import {isDevMode} from '@angular/core';

export class TuiInvalidYearException extends Error {
    constructor(year: number) {
        super(isDevMode() ? `Invalid year: ${year}` : '');
    }
}
