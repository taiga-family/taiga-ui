import {isDevMode} from '@angular/core';
import {TuiAssertLevel} from '@taiga-ui/cdk/enums';

const NOOP = () => {};

/**
 * This class is needed for its getter functionality, so we check
 * for DevMode only after application is bootstrapped
 */
export class TuiAssertHelper {
    bootstrapped = false;

    level = TuiAssertLevel.Warn;

    get assert(): (assertion: boolean, ...args: any[]) => void {
        if (!this.bootstrapped || !isDevMode()) {
            return NOOP;
        }

        return Function.prototype.bind.call(console.assert, console);
    }

    get assertWarn(): (assertion: boolean, ...args: any[]) => void {
        if (!this.bootstrapped || this.level < TuiAssertLevel.Warn || !isDevMode()) {
            return NOOP;
        }

        return Function.prototype.bind.call(console.assert, console);
    }
}

export const tuiAssert = new TuiAssertHelper();
