import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface InputCountOptions {
    readonly icons: Readonly<{
        up: PolymorpheusContent<{}>;
        down: PolymorpheusContent<{}>;
    }>;
    readonly appearance: string;
    readonly hideButtons: boolean;
    readonly min: number;
    readonly max: number;
    readonly step: number;
    readonly postfix: string;
}

// TODO: remove in ivy compilation
export const PASSWORD_ICON_UP = 'tuiIconPlus';
export const PASSWORD_ICON_DOWN = 'tuiIconMinus';

/** Default values for the input count options. */
export const TUI_INPUT_COUNT_DEFAULT_OPTIONS: InputCountOptions = {
    icons: {
        up: PASSWORD_ICON_UP,
        down: PASSWORD_ICON_DOWN,
    },
    appearance: 'textfield',
    hideButtons: false,
    min: 0,
    max: Infinity,
    step: 1,
    postfix: '',
};

export const TUI_INPUT_COUNT_OPTIONS = new InjectionToken<InputCountOptions>(
    'Default parameters for input count component',
    {
        factory: () => TUI_INPUT_COUNT_DEFAULT_OPTIONS,
    },
);
