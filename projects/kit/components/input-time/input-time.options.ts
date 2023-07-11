import {InjectionToken, Provider} from '@angular/core';
import {TuiContextWithImplicit, TuiTimeMode} from '@taiga-ui/cdk';
import {tuiProvideOptions, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputTimeOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
    readonly mode: TuiTimeMode;
    readonly postfix: string;
    readonly maxValues: Record<TuiTimeFormatParts, number>;
    readonly itemSize: TuiSizeL | TuiSizeS;
    readonly nativePicker?: boolean;
}

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: ({$implicit}) => ($implicit === `s` ? `tuiIconClock` : `tuiIconClockLarge`),
    mode: `HH:MM`,
    postfix: ``,
    maxValues: MAX_TIME_VALUES,
    itemSize: `m`,
    nativePicker: false,
};

/**
 * Default parameters for InputTime component
 */
export const TUI_INPUT_TIME_OPTIONS = new InjectionToken<TuiInputTimeOptions>(
    `[TUI_INPUT_TIME_OPTIONS]`,
    {
        factory: () => TUI_INPUT_TIME_DEFAULT_OPTIONS,
    },
);

export function tuiInputTimeOptionsProvider(
    options: Partial<TuiInputTimeOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TIME_OPTIONS,
        options,
        TUI_INPUT_TIME_DEFAULT_OPTIONS,
    );
}
