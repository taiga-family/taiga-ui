export function tuiArrayShallowEquals<T>(a: readonly T[], b: readonly T[]): boolean {
    return a.length === b.length && a.every((item, index) => Object.is(item, b[index]));
}
