import {
    TUI_IDENTITY_VALUE_TRANSFORMER,
    type TuiValueTransformer,
} from '@taiga-ui/cdk/classes';
import {type TuiDay} from '@taiga-ui/cdk/date-time';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiInputDateOptions {
    readonly icon: string;
    readonly max: TuiDay | null;
    readonly min: TuiDay | null;
    readonly valueTransformer: TuiValueTransformer<TuiDay | null, any>;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS = {
    icon: '@tui.calendar',
    min: null,
    max: null,
    valueTransformer: TUI_IDENTITY_VALUE_TRANSFORMER,
} as const;

export const [TUI_INPUT_DATE_OPTIONS, tuiInputDateOptionsProvider] =
    tuiCreateOptions<TuiInputDateOptions>(TUI_INPUT_DATE_DEFAULT_OPTIONS);
