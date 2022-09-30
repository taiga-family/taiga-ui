export function tuiOverrideOptions<T>(
    override: Partial<T>,
): (directive: T | null, options: T) => T {
    return (directive, options) => {
        const result = directive || {...options};

        Object.keys(override).forEach(key => {
            // Update directive props with new defaults before inputs are processed
            (result as any)[key] = override[key as keyof T];
        });

        return result;
    };
}
