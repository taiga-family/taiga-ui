import {TuiDirection, TuiHintMode} from '@taiga-ui/core';

export abstract class AbstractExampleTuiHint {
    readonly modeVariants: ReadonlyArray<TuiHintMode> = [
        TuiHintMode.Error,
        TuiHintMode.Light,
    ];

    mode: TuiHintMode | null = null;

    readonly directionVariants: ReadonlyArray<TuiDirection> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    direction: TuiDirection = this.directionVariants[4];
}
