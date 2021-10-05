import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit, TuiTimeMode} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface InputTimeOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
    readonly mode: TuiTimeMode;
    readonly itemSize: TuiSizeS | TuiSizeL;
}

// TODO: remove in ivy compilation
export const INPUT_TIME_ICON = ({$implicit}: any) =>
    $implicit === 's' ? 'tuiIconTime' : 'tuiIconTimeLarge';

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: InputTimeOptions = {
    icon: INPUT_TIME_ICON,
    mode: 'HH:MM',
    itemSize: 'm',
};

export const TUI_INPUT_TIME_OPTIONS = new InjectionToken<InputTimeOptions>(
    'Default parameters for input time component',
    {
        factory: () => TUI_INPUT_TIME_DEFAULT_OPTIONS,
    },
);
