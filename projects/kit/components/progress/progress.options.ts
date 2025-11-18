import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeXXL, type TuiSizeXXS} from '@taiga-ui/core/types';

export interface TuiProgressOptions {
    readonly color: string | null;
    readonly size: TuiSizeXXL | TuiSizeXXS;
}

export const TUI_PROGRESS_DEFAULT_OPTIONS: TuiProgressOptions = {
    color: null,
    size: 'm',
};

export const [TUI_PROGRESS_OPTIONS, tuiProgressOptionsProvider] = tuiCreateOptions(
    TUI_PROGRESS_DEFAULT_OPTIONS,
);
