import {Provider} from '@angular/core';
import {TuiContext, tuiCreateToken, tuiProvideOptions, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputTimeOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly itemSize: TuiSizeL | TuiSizeS;
    readonly maxValues: Record<TuiTimeFormatParts, number>;
    readonly mode: TuiTimeMode;
    readonly nativePicker?: boolean;
}

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: ({$implicit}) => ($implicit === 's' ? 'tuiIconClock' : 'tuiIconClockLarge'),
    mode: 'HH:MM',
    maxValues: MAX_TIME_VALUES,
    itemSize: 'm',
    nativePicker: false,
};

/**
 * Default parameters for InputTime component
 */
export const TUI_INPUT_TIME_OPTIONS = tuiCreateToken(TUI_INPUT_TIME_DEFAULT_OPTIONS);

export function tuiInputTimeOptionsProvider(
    options: Partial<TuiInputTimeOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TIME_OPTIONS,
        options,
        TUI_INPUT_TIME_DEFAULT_OPTIONS,
    );
}
