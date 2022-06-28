import {TuiIdentityMatcher} from '@taiga-ui/cdk/types';

/**
 * @deprecated: use {@link tuiNullableSame} instead
 * Checks identity for nullable elements.
 *
 * @param a element a
 * @param b element b
 * @param handler called if both elements are not null
 * @return true if either both are null or they pass identity handler
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function nullableSame<T>(
    a: T | null,
    b: T | null,
    handler: TuiIdentityMatcher<T>,
): boolean {
    if (a === null) {
        return b === null;
    }

    if (b === null) {
        return false;
    }

    return handler(a, b);
}

export const tuiNullableSame = nullableSame;
