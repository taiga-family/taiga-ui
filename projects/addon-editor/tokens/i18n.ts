import {InjectionToken} from '@angular/core';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {extractI18n} from '@taiga-ui/i18n';

export const TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES = new InjectionToken<[string, string]>(
    `tui-color-selector i18n`,
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

export const TUI_EDITOR_TOOLBAR_TEXTS = new InjectionToken(`tui-editor-toolbar i18n`, {
    factory: extractI18n(`toolbarTools`),
});

export const TUI_EDITOR_TABLE_COMMANDS = new InjectionToken(
    `tui-editor-toolbar table i18n`,
    {
        factory: extractI18n(`editorTableCommands`),
    },
);

export const TUI_EDITOR_LINK_TEXTS = new InjectionToken(
    `[TUI_EDITOR_LINK_TEXTS]: tui-editor-toolbar edit-link i18n`,
    {
        factory: extractI18n(`editorEditLink`),
    },
);

export const TUI_EDITOR_CODE_OPTIONS = new InjectionToken(
    `tui-editor-toolbar codes options`,
    {
        factory: extractI18n(`editorCodeOptions`),
    },
);

export const TUI_EDITOR_FONT_OPTIONS = new InjectionToken(
    `tui-editor-toolbar font options`,
    {
        factory: extractI18n(`editorFontOptions`),
    },
);
