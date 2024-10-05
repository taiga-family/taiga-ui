import {tuiIsArray} from './is-array';

export function tuiToArray<T>(value: T | readonly T[]): readonly T[];
export function tuiToArray<T>(value: T | readonly T[]): readonly T[];
export function tuiToArray<T>(value: T | T[]): T[] {
    return tuiIsArray(value) ? value : [value];
}
