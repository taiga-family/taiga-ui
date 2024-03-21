import type {TuiRounding} from '@taiga-ui/cdk';
import type {TuiDecimalMode} from '@taiga-ui/core';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from './control';

export abstract class AbstractExampleTuiNumberFormat extends AbstractExampleTuiControl {
    public precision = TUI_DEFAULT_NUMBER_FORMAT.precision;

    public readonly decimalVariants: TuiDecimalMode[] = ['always', 'pad', 'not-zero'];
    public decimalMode = TUI_DEFAULT_NUMBER_FORMAT.decimalMode;

    public readonly roundingVariants: TuiRounding[] = [
        'truncate',
        'round',
        'ceil',
        'floor',
    ];

    public rounding = TUI_DEFAULT_NUMBER_FORMAT.rounding;

    public decimalSeparator = TUI_DEFAULT_NUMBER_FORMAT.decimalSeparator;
    public thousandSeparator = TUI_DEFAULT_NUMBER_FORMAT.thousandSeparator;
}
