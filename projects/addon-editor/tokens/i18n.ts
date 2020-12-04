import {InjectionToken} from '@angular/core';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';

export const TUI_EDITOR_COLOR_SELECTOR_MODE_NAMES = new InjectionToken<[string, string]>(
    `tui-color-selector i18n`,
    {
        factory: () => ['Solid color', 'Gradient'],
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

export const TUI_EDITOR_TOOLBAR_TEXTS = new InjectionToken<
    Record<EditorToolbarTexts, string>
>(`tui-color-selector i18n`, {
    factory: () => ({
        undo: 'Undo',
        redo: 'Redo',
        font: 'Font',
        fontStyle: 'Font style',
        fontSize: 'fontSize',
        bold: 'Bold',
        italic: 'Italic',
        underline: 'Underline',
        strikeThrough: 'Strike Through',
        justify: 'Justify',
        justifyLeft: 'Justify left',
        justifyCenter: 'Justify center',
        justifyRight: 'Justify right',
        justifyFull: 'Justify full',
        list: 'List',
        indent: 'Indent',
        outdent: 'Outdent',
        unorderedList: 'Unordered list',
        orderedList: 'Ordered list',
        quote: 'Quote',
        foreColor: 'Color',
        backColor: 'Background color',
        hiliteColor: 'hiliteColor',
        clear: 'Clear',
        link: 'Link',
        attach: 'Attach file',
        tex: 'Insert TeX',
        code: 'Code',
        image: 'Insert image',
        insertHorizontalRule: 'Insert horizontal rule',
        superscript: 'Superscript',
        subscript: 'Subscript',
    }),
});
