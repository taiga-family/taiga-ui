import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_EDITOR_EXTENSIONS,
    tuiEditorOptionsProvider,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {mergeAttributes} from '@tiptap/core';

@Component({
    selector: 'tui-editor-font-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        tuiEditorOptionsProvider({
            fontOptions: () => [
                {
                    name: 'H1',
                    headingLevel: 1,
                    ngClass: 'text-h1',
                },
                {
                    name: 'H2',
                    headingLevel: 2,
                    ngClass: 'text-h2',
                },
                {
                    name: 'H3',
                    headingLevel: 3,
                    ngClass: 'text-h3',
                },
                {
                    name: 'H4',
                    headingLevel: 4,
                    ngClass: 'text-h4',
                },
                {
                    name: 'H5',
                    headingLevel: 5,
                    ngClass: 'text-h5',
                },
                {
                    name: 'H6',
                    headingLevel: 6,
                    ngClass: 'text-h6',
                },
            ],
        }),
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tiptap/extension-heading').then(({default: Heading}) =>
                    Heading.configure({levels: [1, 2, 3, 4, 5, 6]})
                        // @note: if you want to add custom css classes
                        // then you need customize Heading extension
                        .extend({
                            renderHTML({node, HTMLAttributes}) {
                                type Levels = 1 | 2 | 3 | 4 | 5 | 6;

                                const classes: Record<Levels, string> = {
                                    1: 'text-h1',
                                    2: 'text-h2',
                                    3: 'text-h3',
                                    4: 'text-h4',
                                    5: 'text-h5',
                                    6: 'text-h6',
                                };

                                const hasLevel = this.options.levels.includes(
                                    node.attrs.level,
                                );
                                const level: Levels = hasLevel
                                    ? node.attrs.level
                                    : this.options.levels[0];

                                return [
                                    `h${level}`,
                                    mergeAttributes(
                                        this.options.HTMLAttributes,
                                        HTMLAttributes,
                                        {
                                            class: `${classes[level]}`,
                                        },
                                    ),
                                    0,
                                ];
                            },
                        }),
                ),
            ],
        },
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiEditorFontExample1 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];

    control = new FormControl(`
        <h1>This is a 1st level heading</h1>
        <h2>This is a 2nd level heading</h2>
        <h3>This is a 3rd level heading</h3>
        <h4>This is a 4th level heading</h4>
        <h5>This is a 5th level heading</h5>
        <h6>This is a 6th level heading</h6>
        <p>This is a paragraph</p>
    `);
}
