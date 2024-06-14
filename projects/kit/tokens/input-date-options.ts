import type {Provider} from '@angular/core';
import type {TuiContext, TuiDay} from '@taiga-ui/cdk';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiCreateToken,
    tuiProvideOptions,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

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
export const TUI_INPUT_DATE_OPTIONS = tuiCreateToken(TUI_INPUT_DATE_DEFAULT_OPTIONS);

export function tuiInputDateOptionsProvider(
    options: Partial<TuiInputDateOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_DATE_OPTIONS,
        options,
        TUI_INPUT_DATE_DEFAULT_OPTIONS,
    );
}
