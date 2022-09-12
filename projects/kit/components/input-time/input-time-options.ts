import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiContextWithImplicit, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {MAX_TIME_VALUES} from '@taiga-ui/kit/constants';
import {TuiTimeFormatParts} from '@taiga-ui/kit/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputTimeOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
    readonly mode: TuiTimeMode;
    readonly postfix: string;
    readonly maxValues: Record<TuiTimeFormatParts, number>;
    readonly itemSize: TuiSizeS | TuiSizeL;
}

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: ({$implicit}) => ($implicit === `s` ? `tuiIconTime` : `tuiIconTimeLarge`),
    mode: `HH:MM`,
    postfix: ``,
    maxValues: MAX_TIME_VALUES,
    itemSize: `m`,
};

export const TUI_INPUT_TIME_OPTIONS = new InjectionToken<TuiInputTimeOptions>(
    `[TUI_INPUT_TIME_OPTIONS]: Default parameters for input time component`,
    {
        factory: () => TUI_INPUT_TIME_DEFAULT_OPTIONS,
    },
);

export const tuiInputTimeOptionsProvider: (
    options: Partial<TuiInputTimeOptions>,
) => ValueProvider = (options: Partial<TuiInputTimeOptions>) => ({
    provide: TUI_INPUT_TIME_OPTIONS,
    useValue: {...TUI_INPUT_TIME_DEFAULT_OPTIONS, ...options},
});
