import {InjectionToken, ValueProvider} from '@angular/core';

export interface TuiLineClampOptions {
    readonly showHint: boolean;
}

export const TUI_LINE_CLAMP_DEFAULT_OPTIONS: TuiLineClampOptions = {
    showHint: true,
};

export const TUI_LINE_CLAMP_OPTIONS = new InjectionToken<TuiLineClampOptions>(
    'Default parameters for line-clamp component',
    {
        factory: () => TUI_LINE_CLAMP_DEFAULT_OPTIONS,
    },
);

export const tuiLineClampOptionsProvider: (
    options: Partial<TuiLineClampOptions>,
) => ValueProvider = (options: Partial<TuiLineClampOptions>) => ({
    provide: TUI_LINE_CLAMP_OPTIONS,
    useValue: {...TUI_LINE_CLAMP_DEFAULT_OPTIONS, ...options},
});
