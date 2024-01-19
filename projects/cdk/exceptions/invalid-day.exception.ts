import {isDevMode} from '@angular/core';

export class TuiInvalidDayException extends Error {
    constructor(day: number) {
        super(isDevMode() ? `Invalid day: ${day}` : '');
    }
}
