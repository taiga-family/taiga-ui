import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiValueContentContext} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

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
export const [TUI_SELECT_OPTIONS, tuiSelectOptionsProvider] = tuiCreateOptions(
    TUI_SELECT_DEFAULT_OPTIONS,
);
