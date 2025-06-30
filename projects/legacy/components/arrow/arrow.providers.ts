import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

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
export const TUI_ARROW_MODE = new InjectionToken('TUI_ARROW_MODE', {
    factory: () => TUI_ARROW_DEFAULT_MODE,
});

/**
 * @deprecated: drop in v5.0 use {@link TuiChevron}
 */
export function tuiArrowModeProvider(options: Partial<TuiArrowMode>): Provider {
    return tuiProvideOptions(TUI_ARROW_MODE, options, TUI_ARROW_DEFAULT_MODE);
}
