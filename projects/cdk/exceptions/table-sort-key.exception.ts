import {isDevMode} from '@angular/core';

export class TuiTableSortKeyException extends Error {
    constructor() {
        super(isDevMode() ? 'Trying to sort with no key' : '');
    }
}
