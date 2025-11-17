import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeM, type TuiSizeS} from '@taiga-ui/core/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TUI_ARROW} from './arrow.component';

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export interface TuiArrowMode {
    readonly disabled: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>>;
    readonly interactive: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>>;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export const TUI_ARROW_DEFAULT_MODE: TuiArrowMode = {
    interactive: TUI_ARROW,
    disabled: TUI_ARROW,
};

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export const [TUI_ARROW_MODE, tuiArrowModeProvider] =
    tuiCreateOptions(TUI_ARROW_DEFAULT_MODE);
