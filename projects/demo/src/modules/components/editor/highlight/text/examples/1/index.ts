import {Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-mark-text-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>
                    TextAlign.configure({types: ['heading', 'paragraph']}),
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tiptap/extension-highlight').then(({Highlight}) =>
                    Highlight.configure({
                        multicolor: true,
                        HTMLAttributes: {
                            class: 'marked',
                        },
                    }),
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorMarkTextExample1 {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    readonly builtInTools = [TuiEditorTool.Undo];

    control = new FormControl(
        `
        <p>This isn’t highlighted.</p>
        <p>
            <mark data-color="#e1d0fb">Grammar</mark>
            <mark data-color="#c8eefc">can</mark> be tricky,
            <mark style="background-color: #fae498">especially</mark>
            for the <mark>uninitiated</mark>
        </p>
        `,
    );

    toggleHighlight(): void {
        this.wysiwyg?.editor
            ?.getOriginTiptapEditor()
            .commands.toggleHighlight({color: '#c8eefc'});
    }
}
