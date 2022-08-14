export function tuiArrayRemove<T>(array: readonly T[], index: number): T[] {
    return array.slice(0, index).concat(array.slice(index + 1));
}
