import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-focus-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/addon-editor/extensions/starter-kit')
                    .then(({StarterKit}) => StarterKit)
                    .then(extension => extension.configure({heading: {levels: [1, 2]}})),
                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>
                    TextAlign.configure({types: ['heading', 'paragraph']}),
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tiptap/extension-underline').then(
                    ({default: Underline}) => Underline,
                ),
                import('@tiptap/extension-subscript').then(
                    ({default: Subscript}) => Subscript,
                ),
                import('@tiptap/extension-superscript').then(
                    ({default: Superscript}) => Superscript,
                ),
                import('@taiga-ui/addon-editor/extensions/font-color').then(
                    ({FontColor}) => FontColor,
                ),
                import('@taiga-ui/addon-editor/extensions/link').then(
                    ({TuiLink}) => TuiLink,
                ),
                import('@taiga-ui/addon-editor/extensions/jump-anchor').then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
                import('@taiga-ui/addon-editor/extensions/file-link').then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
                import('@taiga-ui/addon-editor/extensions/background-color').then(
                    ({BackgroundColor}) => BackgroundColor,
                ),
                import('@taiga-ui/addon-editor/extensions/table').then(({TuiTable}) =>
                    TuiTable.configure({resizable: true}),
                ),
                import('@tiptap/extension-table-row').then(
                    ({default: TableRow}) => TableRow,
                ),
                import('@tiptap/extension-table-cell').then(
                    ({default: TableCell}) => TableCell,
                ),
                import('@tiptap/extension-table-header').then(
                    ({TableHeader}) => TableHeader,
                ),
                import('@taiga-ui/addon-editor/extensions/indent-outdent').then(
                    ({TuiTabExtension}) => TuiTabExtension,
                ),
                import('@taiga-ui/addon-editor/extensions/table-cell-background').then(
                    ({TableCellBackground}) => TableCellBackground,
                ),
                import('@taiga-ui/addon-editor/extensions/details').then(
                    ({TuiDetailsContent}) => TuiDetailsContent,
                ),
                import('@taiga-ui/addon-editor/extensions/details').then(
                    ({TuiDetails}) => TuiDetails,
                ),
                import('@taiga-ui/addon-editor/extensions/details').then(
                    ({TuiSummary}) => TuiSummary,
                ),
                import('@taiga-ui/addon-editor/extensions/font-size').then(
                    ({TuiFontSize}) => TuiFontSize,
                ),
                import('@taiga-ui/addon-editor/extensions/image-editor').then(
                    ({createImageEditorExtension}) =>
                        createImageEditorExtension(injector),
                ),
                import('@tiptap/extension-focus').then(({FocusClasses}) =>
                    FocusClasses.configure({
                        className: 'has-focus',

                        /**
                         * @description:
                         * Apply the class to 'all', the 'shallowest' or the 'deepest' node.
                         *
                         * Default: 'all'
                         */
                        mode: 'shallowest',
                    }),
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorFocusExample1 {
    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Img,
        TuiEditorTool.Link,
        TuiEditorTool.Anchor,
    ];

    control = new FormControl(
        // eslint-disable-next-line @typescript-eslint/quotes
        `<img src="./assets/images/piece-and-war.jpg" width="732" alt="" title="" data-type="image-editor"><p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) — <u>Rich Text Editor</u> for using with Angular <sup>forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p> ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: rgb(255, 221, 41)" colspan="1" rowspan="1"><p>+</p></td><td style="background: rgb(57, 181, 77)" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>`,
    );
}
