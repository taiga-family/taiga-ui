import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiValueContentContext} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {InjectionToken} from '@angular/core';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/select TuiSelect} (from @taiga-ui/kit) instead
 */
export interface TuiSelectOptions<T> {
    readonly valueContent: PolymorpheusContent<TuiValueContentContext<T>>;
}

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/select TuiSelect} (from @taiga-ui/kit) instead
 */
export const TUI_SELECT_DEFAULT_OPTIONS: TuiSelectOptions<unknown> = {
    valueContent: '',
};

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/select TuiSelect} (from @taiga-ui/kit) instead
 */
export const TUI_SELECT_OPTIONS = new InjectionToken('TUI_SELECT_OPTIONS', {
    factory: () => TUI_SELECT_DEFAULT_OPTIONS,
});

/**
 * TODO(v5): delete it
 * @deprecated use {@link https://taiga-ui.dev/components/select#override-option-component tuiAsOptionContent} with new version of {@link https://taiga-ui.dev/components/select TuiSelect} (from @taiga-ui/kit) instead
 */
export function tuiSelectOptionsProvider<T>(
    options: Partial<TuiSelectOptions<T>>,
): Provider {
    return tuiProvideOptions(TUI_SELECT_OPTIONS, options, TUI_SELECT_DEFAULT_OPTIONS);
}
