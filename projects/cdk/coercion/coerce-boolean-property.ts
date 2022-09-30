/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @example {@link https://material.angular.io/cdk/coercion/api#functions}
 */
export function tuiCoerceBooleanProperty(
    value: string | number | boolean | null | undefined | object,
): boolean {
    // If you don't mind "[object Object]" in your strings, then you will not need this rule.
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return value !== null && typeof value !== `undefined` && `${value}` !== `false`;
}
