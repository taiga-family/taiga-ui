import {TUI_FIRST_DAY, TUI_LAST_DAY, type TuiDay} from '@taiga-ui/cdk/date-time';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiInputDateOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly max: TuiDay;
    readonly min: TuiDay;
    readonly nativePicker: boolean;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    icon: () => '@tui.calendar',
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
    nativePicker: false,
};

/**
 * Default parameters for InputDate component
 */
export const [TUI_INPUT_DATE_OPTIONS, tuiInputDateOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_DATE_DEFAULT_OPTIONS,
);
