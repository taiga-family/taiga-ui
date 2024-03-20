import type {TuiRounding} from '@taiga-ui/cdk';
import type {TuiDecimal} from '@taiga-ui/core';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from './control';

export abstract class AbstractExampleTuiNumberFormat extends AbstractExampleTuiControl {
    public precision = TUI_DEFAULT_NUMBER_FORMAT.precision;

    public readonly decimalVariants: TuiDecimal[] = ['always', 'pad', 'not-zero'];
    public decimal = TUI_DEFAULT_NUMBER_FORMAT.decimal;

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
