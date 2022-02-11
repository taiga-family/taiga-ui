import {InjectionToken, ValueProvider} from '@angular/core';
import {TUI_STRICT_MATCHER, TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiValueContentContext} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiComboBoxOptions<T> {
    readonly strictMatcher: TuiStringMatcher<T>;
    readonly valueContent: PolymorpheusContent<TuiValueContentContext<T>>;
    readonly strict: boolean;
}

export const TUI_COMBO_BOX_DEFAULT_OPTIONS: TuiComboBoxOptions<unknown> = {
    strictMatcher: TUI_STRICT_MATCHER,
    valueContent: '',
    strict: true,
};

export const TUI_COMBO_BOX_OPTIONS = new InjectionToken<TuiComboBoxOptions<unknown>>(
    'Default parameters for combo box component',
    {
        factory: () => TUI_COMBO_BOX_DEFAULT_OPTIONS,
    },
);

export const tuiComboBoxOptionsProvider: <T>(
    options: Partial<TuiComboBoxOptions<T>>,
) => ValueProvider = <T>(options: Partial<TuiComboBoxOptions<T>>) => ({
    provide: TUI_COMBO_BOX_OPTIONS,
    useValue: {...TUI_COMBO_BOX_DEFAULT_OPTIONS, ...options},
});
