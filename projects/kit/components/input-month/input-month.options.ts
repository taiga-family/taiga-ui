import type {InjectionToken} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

/**
 * @deprecated use {@link TuiInputDateOptions} instead
 */
export interface TuiInputMonthOptions {
    readonly icon: TuiHandler<TuiSizeL | TuiSizeS, string>;
}

/**
 * @deprecated use {@link TUI_INPUT_DATE_DEFAULT_OPTIONS} instead
 */
export const TUI_INPUT_MONTH_DEFAULT_OPTIONS: TuiInputMonthOptions = {
    icon: () => '@tui.calendar',
};

const options = tuiCreateOptions(TUI_INPUT_MONTH_DEFAULT_OPTIONS);

/**
 * @deprecated use {@link TUI_INPUT_DATE_OPTIONS} instead
 */
export const TUI_INPUT_MONTH_OPTIONS: InjectionToken<TuiInputMonthOptions> = options[0];

/**
 * @deprecated use {@link tuiInputDateOptionsProvider} instead
 */
export const tuiInputMonthOptionsProvider = options[1];
