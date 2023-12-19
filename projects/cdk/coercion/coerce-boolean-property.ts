/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @example {@link https://material.angular.io/cdk/coercion/api#functions}
 */
export function tuiCoerceBooleanProperty(
    value: Record<string, any> | boolean | number | string | null | undefined,
): boolean {
    return value !== null && typeof value !== 'undefined' && `${value}` !== 'false';
}
