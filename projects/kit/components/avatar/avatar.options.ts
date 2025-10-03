import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeXS, type TuiSizeXXL} from '@taiga-ui/core/types';

export interface TuiAvatarOptions extends TuiAppearanceOptions {
    readonly appearance: string;
    readonly round: boolean;
    readonly size: TuiSizeXS | TuiSizeXXL;
}

export const [TUI_AVATAR_OPTIONS, tuiAvatarOptionsProvider] =
    tuiCreateOptions<TuiAvatarOptions>({
        appearance: '',
        round: true,
        size: 'm',
    });
