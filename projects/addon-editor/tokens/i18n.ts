import {InjectionToken} from '@angular/core';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {tuiExtractI18n} from '@taiga-ui/i18n';

export const TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES = new InjectionToken<[string, string]>(
    `[TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES]: tui-color-selector i18n`,
    {
        factory: () => [`Solid color`, `Gradient`],
    },
);

export type EditorToolbarTexts =
    | TuiEditorTool
    | 'redo'
    | 'font'
    | 'fontStyle'
    | 'justifyLeft'
    | 'justifyCenter'
    | 'justifyRight'
    | 'justifyFull'
    | 'unorderedList'
    | 'orderedList'
    | 'indent'
    | 'outdent'
    | 'backColor';

export const TUI_EDITOR_TOOLBAR_TEXTS = new InjectionToken(
    `[TUI_EDITOR_TOOLBAR_TEXTS]: tui-editor-toolbar i18n`,
    {
        factory: tuiExtractI18n(`toolbarTools`),
    },
);

export const TUI_EDITOR_TABLE_COMMANDS = new InjectionToken(
    `[TUI_EDITOR_TABLE_COMMANDS]: tui-editor-toolbar table i18n`,
    {
        factory: tuiExtractI18n(`editorTableCommands`),
    },
);

export const TUI_EDITOR_CODE_OPTIONS = new InjectionToken(
    `[TUI_EDITOR_CODE_OPTIONS]: tui-editor-toolbar codes options`,
    {
        factory: tuiExtractI18n(`editorCodeOptions`),
    },
);

export const TUI_EDITOR_FONT_OPTIONS = new InjectionToken(
    `[TUI_EDITOR_FONT_OPTIONS]: tui-editor-toolbar font options`,
    {
        factory: tuiExtractI18n(`editorFontOptions`),
    },
);
