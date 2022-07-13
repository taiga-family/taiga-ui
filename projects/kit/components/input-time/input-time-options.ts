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

// TODO: 3.0 remove in ivy compilation
export const INPUT_TIME_ICON = ({
    $implicit,
}: TuiContextWithImplicit<TuiSizeS | TuiSizeL>): string =>
    $implicit === 's' ? 'tuiIconTime' : 'tuiIconTimeLarge';

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: INPUT_TIME_ICON,
    mode: 'HH:MM',
    postfix: '',
    maxValues: MAX_TIME_VALUES,
    itemSize: 'm',
};

export const TUI_INPUT_TIME_OPTIONS = new InjectionToken<TuiInputTimeOptions>(
    'Default parameters for input time component',
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
