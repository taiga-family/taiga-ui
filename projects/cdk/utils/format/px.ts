import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * Adds 'px' to the number and turns it into a string
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function tuiPx(value: number): string {
    tuiAssert.assert(Number.isFinite(value), `Value must be finite number`);

    return `${value}px`;
}
