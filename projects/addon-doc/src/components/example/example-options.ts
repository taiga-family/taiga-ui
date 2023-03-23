import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';

import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '../../interfaces/page';

export interface TuiDocExampleOptions {
    codeEditorVisibilityHandler: TuiBooleanHandler<Record<string, string>>;
}

export const TUI_DOC_EXAMPLE_DEFAULT_OPTIONS: TuiDocExampleOptions = {
    codeEditorVisibilityHandler: files =>
        Boolean(
            files[TUI_EXAMPLE_PRIMARY_FILE_NAME.TS] &&
                files[TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML],
        ),
};

/**
 * Default parameters for DocExample component
 */
export const TUI_DOC_EXAMPLE_OPTIONS = new InjectionToken<TuiDocExampleOptions>(
    `[TUI_DOC_EXAMPLE_OPTIONS]`,
    {
        factory: () => TUI_DOC_EXAMPLE_DEFAULT_OPTIONS,
    },
);

export function tuiDocExampleOptionsProvider(
    options: Partial<TuiDocExampleOptions>,
): ValueProvider {
    return {
        provide: TUI_DOC_EXAMPLE_OPTIONS,
        useValue: {...TUI_DOC_EXAMPLE_DEFAULT_OPTIONS, ...options},
    };
}
