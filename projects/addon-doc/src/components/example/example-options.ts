import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiBooleanHandler} from '@taiga-ui/cdk';

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

export const TUI_DOC_EXAMPLE_OPTIONS = new InjectionToken<TuiDocExampleOptions>(
    `[TUI_DOC_EXAMPLE_OPTIONS]: Default parameters for DocExample component`,
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
