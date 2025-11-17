import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import {type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiInputFilesOptions extends TuiAppearanceOptions {
    accept: string;
    maxFileSize: number;
    multiple: boolean;
    size: TuiSizeL;
}

export const TUI_INPUT_FILES_DEFAULT_OPTIONS: TuiInputFilesOptions = {
    appearance: 'file',
    accept: '',
    multiple: false,
    size: 'm',
    maxFileSize: 30 * 1024 * 1024, // 30 MiB
};

/**
 * Default parameters for input files component
 */
export const [TUI_INPUT_FILES_OPTIONS, tuiInputFilesOptionsProvider] = tuiCreateOptions(
    TUI_INPUT_FILES_DEFAULT_OPTIONS,
);
