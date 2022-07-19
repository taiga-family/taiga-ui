import {TuiNullable} from '@taiga-ui/cdk/interfaces';

import {tuiIsNil} from './is-nil';

export function tuiIsNotNil<T>(value: TuiNullable<T>): value is T {
    return !tuiIsNil(value);
}
