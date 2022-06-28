import {isPresent} from './is-present';

/**
 * @deprecated use nullish coalescing operator
 * If the value is null or undefined, returns default value
 * @param value
 * @param fallback alternative fallback
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function fallbackValue<T>(value: T | null | undefined, fallback: T): T {
    return isPresent(value) ? value : fallback;
}
