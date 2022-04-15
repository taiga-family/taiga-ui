/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @example {@link https://material.angular.io/cdk/coercion/api#functions}
 */
export function tuiCoerceBooleanProperty(
    value: string | number | boolean | null | undefined | object,
): boolean {
    return value != null && `${value}` !== 'false';
}
