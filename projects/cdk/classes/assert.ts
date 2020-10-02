import {isDevMode} from '@angular/core';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

/**
 * This class is needed for its getter functionality, so we check
 * for DevMode only after application is bootstrapped
 */
export class TuiAssertHelper {
    bootstrapped = false;

    get assert(): (assertion: boolean, ...args: any[]) => void {
        return !this.bootstrapped || !isDevMode()
            ? EMPTY_FUNCTION
            : Function.prototype.bind.call(console.assert, console);
    }
}

export const tuiAssert = new TuiAssertHelper();
