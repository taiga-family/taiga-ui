import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiHintDirection} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiHintOptions {
    readonly direction: TuiHintDirection;
    readonly showDelay: number;
    readonly hideDelay: number;
    readonly appearance: string;
    readonly icon: PolymorpheusContent;
}

/** Default values for hint options */
export const TUI_HINT_DEFAULT_OPTIONS: TuiHintOptions = {
    direction: `bottom-left`,
    showDelay: 500,
    hideDelay: 200,
    appearance: ``,
    icon: `tuiIconTooltipLarge`,
};

export const TUI_HINT_OPTIONS = new InjectionToken<TuiHintOptions>(
    `[TUI_HINT_OPTIONS] Default parameters for hint directive`,
    {
        factory: () => TUI_HINT_DEFAULT_OPTIONS,
    },
);

export const tuiHintOptionsProvider: (
    options: Partial<TuiHintOptions>,
) => ValueProvider = (options: Partial<TuiHintOptions>) => ({
    provide: TUI_HINT_OPTIONS,
    useValue: {...TUI_HINT_DEFAULT_OPTIONS, ...options},
});
