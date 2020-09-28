import {isDevMode} from '@angular/core';

const NOOP = () => {};

/**
 * This class is needed for its getter functionality, so we check
 * for DevMode only after application is bootstrapped
 */
export class TuiAssertHelper {
    bootstrapped = false;

    get assert(): (assertion: boolean, ...args: any[]) => void {
        return !this.bootstrapped || !isDevMode()
            ? NOOP
            : Function.prototype.bind.call(console.assert, console);
    }
}

export const tuiAssert = new TuiAssertHelper();
