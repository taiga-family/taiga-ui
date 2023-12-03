import {TuiArrayOrValue} from '@taiga-ui/cdk/types';

export function tuiToArray<T>(value: TuiArrayOrValue<T>): readonly T[] {
    return Array.isArray(value) ? value : [value];
}
