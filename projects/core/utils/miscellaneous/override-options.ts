export function tuiOverrideOptions<T>(
    override: Partial<T>,
    fallback: T,
): (directive: T | null, options: T | null) => T {
    return (directive, options) => {
        const result = directive || {...(options || fallback)};

        Object.keys(override).forEach(key => {
            // Update directive props with new defaults before inputs are processed
            (result as any)[key] = override[key as keyof T];
        });

        return result;
    };
}
