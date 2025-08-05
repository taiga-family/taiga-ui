import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives';
import {type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiLikeOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeS;
    readonly icons: Readonly<{
        checked: TuiStringHandler<TuiSizeS> | string;
        unchecked: TuiStringHandler<TuiSizeS> | string;
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
