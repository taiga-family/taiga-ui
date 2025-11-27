import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiPaginationOptions {
    readonly size: TuiSizeL;
    readonly appearance: TuiStringHandler<boolean>;
}

export const [TUI_PAGINATION_OPTIONS, tuiPaginationOptionsProvider] =
    tuiCreateOptions<TuiPaginationOptions>({
        size: 'l',
        appearance: (isActive) => (isActive ? 'primary' : 'flat'),
    });
