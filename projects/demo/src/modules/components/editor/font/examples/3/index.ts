import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-font-example-3',
    templateUrl: './index.html',
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@taiga-ui/addon-editor/extensions/font-size').then(
                    ({TuiFontSize}) => TuiFontSize,
                ),
            ],
        },
    ],
    encapsulation,
    changeDetection,
})
export class TuiEditorFontExample3 {
    readonly builtInTools = [TuiEditorTool.Undo];

    control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
