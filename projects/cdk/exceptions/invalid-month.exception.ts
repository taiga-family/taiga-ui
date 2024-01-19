import {isDevMode} from '@angular/core';

export class TuiInvalidMonthException extends Error {
    constructor(month: number) {
        super(isDevMode() ? `Invalid month: ${month}` : '');
    }
}
