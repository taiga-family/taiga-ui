import {Provider} from '@angular/core';
import {tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiLineClampOptions {
    readonly showHint: boolean;
}

export const TUI_LINE_CLAMP_DEFAULT_OPTIONS: TuiLineClampOptions = {
    showHint: true,
};

/**
 * Default parameters for LineClamp component
 */
export const TUI_LINE_CLAMP_OPTIONS = tuiCreateOptions(TUI_LINE_CLAMP_DEFAULT_OPTIONS);

export function tuiLineClampOptionsProvider(
    options: Partial<TuiLineClampOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_LINE_CLAMP_OPTIONS,
        options,
        TUI_LINE_CLAMP_DEFAULT_OPTIONS,
    );
}
