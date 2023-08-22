import {tuiCreateToken} from '@taiga-ui/cdk';
import {tuiFormatSize} from '@taiga-ui/kit/utils';

export interface TuiFileOptions {
    readonly formatSize: (
        units: [string, string, string],
        size?: number,
    ) => string | null;
}

export const TUI_FILE_DEFAULT_OPTIONS: TuiFileOptions = {
    formatSize: tuiFormatSize,
};

/**
 * Default parameters for file component
 */
export const TUI_FILE_OPTIONS = tuiCreateToken(TUI_FILE_DEFAULT_OPTIONS);
