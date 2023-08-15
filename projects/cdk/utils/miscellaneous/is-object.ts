export function tuiIsObject<T extends Record<string, any>>(
    value: unknown,
): value is NonNullable<T> {
    // eslint-disable-next-line @taiga-ui/experience/no-typeof
    return typeof value === `object` && !!value;
}
