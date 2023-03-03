import {InjectionToken} from '@angular/core';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {tuiExtractI18n} from '@taiga-ui/i18n';

/**
 * tui-color-selector i18n
 */
export const TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES = new InjectionToken<[string, string]>(
    `[TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES]`,
    {
        factory: () => [`Solid color`, `Gradient`],
    },
);

export type EditorToolbarTexts =
    | TuiEditorTool
    | 'backColor'
    | 'font'
    | 'fontStyle'
    | 'indent'
    | 'justifyCenter'
    | 'justifyFull'
    | 'justifyLeft'
    | 'justifyRight'
    | 'orderedList'
    | 'outdent'
    | 'redo'
    | 'unorderedList';

/**
 * tui-editor-toolbar i18n
 */
export const TUI_EDITOR_TOOLBAR_TEXTS = new InjectionToken(`[TUI_EDITOR_TOOLBAR_TEXTS]`, {
    factory: tuiExtractI18n(`toolbarTools`),
});

/**
 * tui-editor-toolbar table i18n
 */
export const TUI_EDITOR_TABLE_COMMANDS = new InjectionToken(
    `[TUI_EDITOR_TABLE_COMMANDS]`,
    {
        factory: tuiExtractI18n(`editorTableCommands`),
    },
);

/**
 * tui-editor-toolbar edit-link i18n
 */
export const TUI_EDITOR_LINK_TEXTS = new InjectionToken(`[TUI_EDITOR_LINK_TEXTS]`, {
    factory: tuiExtractI18n(`editorEditLink`),
});

/**
 * tui-editor-toolbar codes options
 */
export const TUI_EDITOR_CODE_OPTIONS = new InjectionToken(`[TUI_EDITOR_CODE_OPTIONS]`, {
    factory: tuiExtractI18n(`editorCodeOptions`),
});

/**
 * tui-editor-toolbar font options
 */
export const TUI_EDITOR_FONT_OPTIONS = new InjectionToken(`[TUI_EDITOR_FONT_OPTIONS]`, {
    factory: tuiExtractI18n(`editorFontOptions`),
});
