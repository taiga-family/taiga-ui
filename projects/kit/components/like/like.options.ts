import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiLikeOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeS;
    readonly icons: Readonly<{
        checked: string;
        unchecked: string;
    }>;
}

export const [TUI_LIKE_OPTIONS, tuiLikeOptionsProvider] =
    tuiCreateOptions<TuiLikeOptions>({
        size: 'm',
        appearance: 'secondary',
        icons: {
            unchecked: '@tui.heart',
            checked: '@tui.heart-filled',
        },
    });
