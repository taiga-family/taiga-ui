import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_EDITOR_EXTENSIONS,
    tuiEditorOptionsProvider,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-font-example-2',
    templateUrl: './index.html',
    providers: [
        tuiEditorOptionsProvider({
            fontOptions: () =>
                [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96].map(size => ({
                    px: size,
                    name: `${size}`,
                    ngStyle: {'font-size': '1rem'},
                })),
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
                import('@taiga-ui/addon-editor/extensions/font-size').then(
                    ({TuiFontSize}) => TuiFontSize,
                ),
            ],
        },
    ],
    encapsulation,
    changeDetection,
})
export class TuiEditorFontExample2 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Size];

    control = new FormControl(`
        <p><span style="font-size: 96px">96</span></p>
        <p><span style="font-size: 72px">72</span></p>
        <p><span style="font-size: 48px">48</span></p>
        <p><span style="font-size: 36px">36</span></p>
        <p><span style="font-size: 30px">30</span></p>
        <p><span style="font-size: 24px">24</span></p>
        <p><span style="font-size: 18px">18</span></p>
        <p><span style="font-size: 14px">14</span></p>
        <p><span style="font-size: 12px">12</span></p>
        <p><span style="font-size: 11px">11</span></p>
        <p><span style="font-size: 10px">10</span></p>
        <p><span style="font-size: 9px">9</span></p>
        <p><span style="font-size: 8px">8</span></p>
    `);
}
