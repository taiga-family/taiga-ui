import {InjectionToken, ValueProvider} from '@angular/core';
import {
    defaultEditorColors,
    EDITOR_BLANK_COLOR,
    tuiDefaultFontOptionsHandler,
} from '@taiga-ui/addon-editor/constants';

export interface TuiEditorOptions {
    readonly blankColor: string;
    readonly colors: ReadonlyMap<string, string>;
    readonly fontOptions: typeof tuiDefaultFontOptionsHandler;
}

export const TUI_EDITOR_DEFAULT_OPTIONS: TuiEditorOptions = {
    colors: defaultEditorColors,
    blankColor: EDITOR_BLANK_COLOR,
    fontOptions: tuiDefaultFontOptionsHandler,
};

export const TUI_EDITOR_OPTIONS = new InjectionToken<TuiEditorOptions>(
    `Default Editor colors`,
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
