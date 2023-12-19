export function tuiIsObject<T extends Record<string, any>>(
    value: unknown,
): value is NonNullable<T> {
    return typeof value === 'object' && !!value;
}
