import {type TuiRounding} from '@taiga-ui/cdk/types';

import {tuiCeil, tuiFloor, tuiRound, tuiTrunc} from './round';

export function tuiRoundWith({
    value,
    precision,
    method,
}: {
    method: TuiRounding;
    precision: number;
    value: number;
}): number {
    switch (method) {
        case 'ceil':
            return tuiCeil(value, precision);
        case 'floor':
            return tuiFloor(value, precision);
        case 'round':
            return tuiRound(value, precision);
        default:
            return tuiTrunc(value, precision);
    }
}
