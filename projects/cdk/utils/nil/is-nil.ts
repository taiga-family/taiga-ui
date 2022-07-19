import {TuiNullable} from '@taiga-ui/cdk/interfaces';

export function tuiIsNil<T>(value: TuiNullable<T>): value is null | undefined {
    return value === null || typeof value === 'undefined';
}
