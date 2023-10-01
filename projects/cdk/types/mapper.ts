/**
 * Typed mapping function.
 */
export type TuiMapper<T extends unknown[], G> = (...args: T) => G;
