import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export interface TuiLineClampOptions {
    readonly showHint: boolean;
}

export const TUI_LINE_CLAMP_DEFAULT_OPTIONS: TuiLineClampOptions = {
    showHint: true,
};

/**
 * Default parameters for LineClamp component
 */
export const [TUI_LINE_CLAMP_OPTIONS, tuiLineClampOptionsProvider] = tuiCreateOptions(
    TUI_LINE_CLAMP_DEFAULT_OPTIONS,
);
