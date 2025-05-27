import {
    TUI_FIRST_DAY,
    TUI_IDENTITY_VALUE_TRANSFORMER,
    TUI_LAST_DAY,
    tuiCreateOptions,
    type TuiDay,
    type TuiHandler,
    type TuiValueTransformer,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export interface TuiInputDateOptionsNew {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
    readonly max: TuiDay;
    readonly min: TuiDay;
    readonly valueTransformer: TuiValueTransformer<TuiDay | null, any>;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW = {
    icon: () => '@tui.calendar',
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
    valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
} as const;

export const [TUI_INPUT_DATE_OPTIONS_NEW, tuiInputDateOptionsProviderNew] =
    tuiCreateOptions<TuiInputDateOptionsNew>(TUI_INPUT_DATE_DEFAULT_OPTIONS_NEW);
