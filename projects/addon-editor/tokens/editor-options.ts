import {InjectionToken, ValueProvider} from '@angular/core';
import {defaultEditorColors, EDITOR_BLANK_COLOR} from '@taiga-ui/addon-editor/constants';

export interface TuiEditorOptions {
    readonly colors: ReadonlyMap<string, string>;
    readonly blankColor: string;
}

export const TUI_EDITOR_DEFAULT_OPTIONS: TuiEditorOptions = {
    colors: defaultEditorColors,
    blankColor: EDITOR_BLANK_COLOR,
};

export const TUI_EDITOR_OPTIONS = new InjectionToken<TuiEditorOptions>(
    'Default Editor colors',
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
