import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiOrientation, type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiFileOptions {
    readonly size: TuiSizeL | TuiSizeS | '';
    readonly orientation: TuiOrientation;
}

export const TUI_FILE_OPTIONS_DEFAULT_OPTIONS: TuiFileOptions = {
    size: 'l',
    orientation: 'horizontal',
};

export const [TUI_FILE_OPTIONS_OPTIONS, tuiFileOptionsProvider] = tuiCreateOptions(
    TUI_FILE_OPTIONS_DEFAULT_OPTIONS,
);
