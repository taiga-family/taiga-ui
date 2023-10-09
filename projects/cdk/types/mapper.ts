/**
 * Typed mapping function.
 *
 * @deprecated Will be removed in v4.0. Use {@link TuiTypedMapper} instead.
 */
export type TuiMapper<T, G> = (item: T, ...args: any[]) => G;

/**
 * Typed mapping function.
 */
export type TuiTypedMapper<T extends unknown[], G> = (...args: T) => G;
