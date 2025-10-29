import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiPaginationOptions {
    readonly appearance: TuiStringHandler<{
        isActive: boolean;
        size: TuiSizeL | TuiSizeS;
    }>;
    readonly defaultSize: TuiSizeL | TuiSizeS;
}

export const [TUI_PAGINATION_OPTIONS, tuiPaginationOptionsProvider] =
    tuiCreateOptions<TuiPaginationOptions>({
        appearance: ({isActive, size}) => {
            const fallback = size === 's' ? 'secondary' : 'flat';

            return isActive ? 'primary' : fallback;
        },
        defaultSize: 'l',
    });
