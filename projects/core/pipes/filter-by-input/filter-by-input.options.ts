import {TUI_DEFAULT_MATCHER, TUI_STRICT_MATCHER} from '@taiga-ui/cdk/constants';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiFilterByInputOptions<T = any> {
    filter(
        items: readonly T[],
        search: string,
        stringify?: TuiHandler<T, string>,
    ): readonly T[];
}

export const TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS: TuiFilterByInputOptions = {
    filter: (items, search, stringify) =>
        items.find((x) => TUI_STRICT_MATCHER(x, search, stringify))
            ? items
            : items.filter((x) => TUI_DEFAULT_MATCHER(x, search, stringify)),
};

export const [TUI_FILTER_BY_INPUT_OPTIONS, tuiFilterByInputOptionsProvider] =
    tuiCreateOptions(TUI_FILTER_BY_INPUT_DEFAULT_OPTIONS);
