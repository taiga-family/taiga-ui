import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeS, type TuiSizeXL} from '@taiga-ui/core/types';

export interface TuiBadgeOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeS | TuiSizeXL;
}

export const TUI_BADGE_DEFAULT_OPTIONS: TuiBadgeOptions = {
    appearance: '',
    size: 'l',
};

export const [TUI_BADGE_OPTIONS, tuiBadgeOptionsProvider] = tuiCreateOptions(
    TUI_BADGE_DEFAULT_OPTIONS,
);
