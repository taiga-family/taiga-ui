import type {Provider} from '@angular/core';
import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '@taiga-ui/addon-doc/types';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiDocExampleOptions {
    codeEditorVisibilityHandler: TuiBooleanHandler<Record<string, string>>;
    fullsize: boolean;
    linkIcon: string;
    tabTitles: Map<unknown, PolymorpheusContent>;
}

export const TUI_DOC_EXAMPLE_DEFAULT_OPTIONS: TuiDocExampleOptions = {
    codeEditorVisibilityHandler: files =>
        Boolean(
            files[TUI_EXAMPLE_PRIMARY_FILE_NAME.TS] &&
                files[TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML],
        ),
    tabTitles: new Map(),
    fullsize: true,
    linkIcon: '@tui.link',
};

/**
 * Default parameters for DocExample component
 */
export const TUI_DOC_EXAMPLE_OPTIONS = tuiCreateToken(TUI_DOC_EXAMPLE_DEFAULT_OPTIONS);

export function tuiDocExampleOptionsProvider(
    options: Partial<TuiDocExampleOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_DOC_EXAMPLE_OPTIONS,
        options,
        TUI_DOC_EXAMPLE_DEFAULT_OPTIONS,
    );
}
