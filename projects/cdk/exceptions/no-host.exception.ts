import {isDevMode} from '@angular/core';

export class TuiNoHostException extends Error {
    constructor() {
        super(isDevMode() ? 'Portals cannot be used without TuiPortalHostComponent' : '');
    }
}
