// TODO: Drop any
export function tuiFallbackAccessor<T extends {type: string} = any>(
    type: string,
): (accessors: readonly T[], fallback: T) => T {
    return (accessors, fallback) =>
        accessors.find(accessor => accessor !== fallback && accessor.type === type) ||
        fallback;
}
