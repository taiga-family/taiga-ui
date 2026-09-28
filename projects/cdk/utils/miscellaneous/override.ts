/**
 * Merges the first passed object with one or more partial overrides.
 * Unlike a plain spread merge, explicit `undefined` fields
 * in the override object are ignored.
 */
export function tuiOverride<T>(a: T, ...b: Array<Partial<T>>): T {
    const result = {...a};

    for (const obj of b) {
        for (const key of Object.keys(obj) as Array<keyof T>) {
            const value = obj[key];

            if (value !== undefined) {
                result[key] = value;
            }
        }
    }

    return result;
}
