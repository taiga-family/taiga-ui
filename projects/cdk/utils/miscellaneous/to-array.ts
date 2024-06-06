import type {TuiArrayOrValue} from '@taiga-ui/cdk/types';

export function tuiToArray<T>(value: TuiArrayOrValue<T>): readonly T[] {
    return value instanceof Array ? value : [value];
}
