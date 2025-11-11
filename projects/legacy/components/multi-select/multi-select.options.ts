import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiMultiSelectOptions<T> {
    readonly rows: number;
    readonly valueContent: PolymorpheusContent<TuiContext<readonly T[]>>;
}

export const TUI_MULTI_SELECT_DEFAULT_OPTIONS: TuiMultiSelectOptions<unknown> = {
    rows: Infinity,
    valueContent: '',
};

/**
 * @deprecated: drop in v5.0
 * Default parameters for MultiSelect component
 */
export const [TUI_MULTI_SELECT_OPTIONS, tuiMultiSelectOptionsProvider] = tuiCreateOptions(
    TUI_MULTI_SELECT_DEFAULT_OPTIONS,
);
