import {InjectionToken, ValueProvider} from '@angular/core';
import {
    defaultEditorColors,
    EDITOR_BLANK_COLOR,
    TUI_DEFAULT_LINK_OPTIONS,
    tuiDefaultFontOptionsHandler,
    TuiEditorLinkOptions,
} from '@taiga-ui/addon-editor/constants';

export interface TuiEditorOptions {
    readonly blankColor: string;
    readonly colors: ReadonlyMap<string, string>;
    readonly fontOptions: typeof tuiDefaultFontOptionsHandler;
    readonly linkOptions?: TuiEditorLinkOptions;
}

export const TUI_EDITOR_DEFAULT_OPTIONS: TuiEditorOptions = {
    colors: defaultEditorColors,
    blankColor: EDITOR_BLANK_COLOR,
    linkOptions: TUI_DEFAULT_LINK_OPTIONS,
    fontOptions: tuiDefaultFontOptionsHandler,
};

/**
 * Default Editor colors
 */
export const TUI_EDITOR_OPTIONS = new InjectionToken<TuiEditorOptions>(
    `[TUI_EDITOR_OPTIONS]`,
    {
        factory: () => TUI_EDITOR_DEFAULT_OPTIONS,
    },
);

export function tuiEditorOptionsProvider(
    options: Partial<TuiEditorOptions>,
): ValueProvider {
    return {
        provide: TUI_EDITOR_OPTIONS,
        useValue: {...TUI_EDITOR_DEFAULT_OPTIONS, ...options},
    };
}
