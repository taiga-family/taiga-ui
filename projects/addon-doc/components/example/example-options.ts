import {InjectionToken, ValueProvider} from '@angular/core';
import {TUI_EXAMPLE_PRIMARY_FILE_NAME} from '@taiga-ui/addon-doc/interfaces';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiDocExampleOptions {
    codeEditorVisibilityHandler: TuiBooleanHandler<Record<string, string>>;
    tabTitles: Map<unknown, PolymorpheusContent>;
}

export const TUI_DOC_EXAMPLE_DEFAULT_OPTIONS: TuiDocExampleOptions = {
    codeEditorVisibilityHandler: files =>
        Boolean(
            files[TUI_EXAMPLE_PRIMARY_FILE_NAME.TS] &&
                files[TUI_EXAMPLE_PRIMARY_FILE_NAME.HTML],
        ),
    tabTitles: new Map(),
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
