import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

export interface TuiLineClampOptions {
    readonly showHint: boolean;
}

export const TUI_LINE_CLAMP_DEFAULT_OPTIONS: TuiLineClampOptions = {
    showHint: true,
};

/**
 * Default parameters for LineClamp component
 */
export const TUI_LINE_CLAMP_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_LINE_CLAMP_OPTIONS' : '',
    {
        factory: () => TUI_LINE_CLAMP_DEFAULT_OPTIONS,
    },
);

export function tuiLineClampOptionsProvider(
    options: Partial<TuiLineClampOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_LINE_CLAMP_OPTIONS,
        options,
        TUI_LINE_CLAMP_DEFAULT_OPTIONS,
    );
}
