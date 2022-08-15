export function tuiArrayRemove<T>(array: readonly T[], index: number): T[] {
    return array.slice(0, Math.max(index, 0)).concat(array.slice(Math.max(index + 1, 0)));
}
