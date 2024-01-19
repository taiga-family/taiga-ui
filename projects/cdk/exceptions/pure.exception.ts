import {isDevMode} from '@angular/core';

export class TuiPureException extends Error {
    constructor() {
        super(isDevMode() ? 'tuiPure can only be used with functions or getters' : '');
    }
}
