import {TuiRounding} from '@taiga-ui/cdk/types';

import {tuiCeil, tuiFloor, tuiRound, tuiTrunc} from './round';

export function tuiRoundWith({
    value,
    precision,
    method,
}: {
    value: number;
    precision: number;
    method: TuiRounding;
}): number {
    switch (method) {
        case `round`:
            return tuiRound(value, precision);
        case `ceil`:
            return tuiCeil(value, precision);
        case `floor`:
            return tuiFloor(value, precision);
        default:
            return tuiTrunc(value, precision);
    }
}
