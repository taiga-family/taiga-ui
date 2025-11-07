export const tuiObjectShallowEquals = <T extends object>(a: T, b: T): boolean =>
    a === b ||
    (Object.keys(a).length === Object.keys(b).length &&
        Object.keys(a).every(
            (k) =>
                Object.prototype.hasOwnProperty.call(b, k) &&
                a[k as keyof T] === b[k as keyof T],
        ));
