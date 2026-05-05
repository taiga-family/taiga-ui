import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export type TuiFileOrientation = 'horizontal' | 'vertical';

export interface TuiFileOptions {
    readonly size: TuiSizeL | TuiSizeS | '';
    readonly orientation: TuiFileOrientation;
}

export const TUI_FILE_OPTIONS_DEFAULT_OPTIONS: TuiFileOptions = {
    size: 'l',
    orientation: 'horizontal',
};

export const [TUI_FILE_OPTIONS_OPTIONS, tuiFileOptionsProvider] = tuiCreateOptions(
    TUI_FILE_OPTIONS_DEFAULT_OPTIONS,
);
