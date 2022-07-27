import {tuiAssert} from '@taiga-ui/cdk/classes';

/**
 * @deprecated: use {@link tuiEaseInOutQuad} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function easeInOutQuad(t: number): number {
    tuiAssert.assert(
        0 <= t && t <= 1,
        `Input must be between 0 and 1 inclusive but received `,
        t,
    );

    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export const tuiEaseInOutQuad = easeInOutQuad;
