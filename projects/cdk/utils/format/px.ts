import {isDevMode} from '@angular/core';
import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * Adds 'px' to the number and turns it into a string
 */
export function tuiPx(value: number): string {
    isDevMode() &&
        tuiAssert.assert(Number.isFinite(value), 'Value must be finite number');

    return `${value}px`;
}
