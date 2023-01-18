export function tuiIsObject<T extends Record<string, any>>(
    value: unknown,
): value is NonNullable<T> {
    // eslint-disable-next-line @taiga-ui/no-typeof
    return typeof value === `object` && !!value;
}
