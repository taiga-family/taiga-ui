import {type TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiPaginationOptions {
    readonly size: TuiSizeL | TuiSizeS;
    readonly appearance: TuiHandler<
        {isActive: boolean},
        TuiAppearanceOptions['appearance']
    >;
}

export const [TUI_PAGINATION_OPTIONS, tuiPaginationOptionsProvider] =
    tuiCreateOptions<TuiPaginationOptions>({
        size: 'l',
        appearance: ({isActive}) => (isActive ? 'primary' : 'flat'),
    });
