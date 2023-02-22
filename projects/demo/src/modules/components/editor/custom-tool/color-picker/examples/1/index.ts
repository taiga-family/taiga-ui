import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-color-picker-tool-example-1',
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
                import('@taiga-ui/addon-editor/extensions/font-color').then(
                    ({FontColor}) => FontColor,
                ),
                import('@taiga-ui/addon-editor/extensions/background-color').then(
                    ({BackgroundColor}) => BackgroundColor,
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorColorPickerToolExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];

    readonly control = new FormControl('');
}
