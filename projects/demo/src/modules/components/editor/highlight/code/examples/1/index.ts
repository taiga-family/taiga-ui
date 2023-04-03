import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

@Component({
    selector: 'tui-editor-code-block-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useFactory: () => {
                return [
                    import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                        ({StarterKit}) => StarterKit,
                    ),
                ];
            },
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorCodeBlockExample1 implements OnInit {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];

    control = new FormControl('');

    async ngOnInit(): Promise<void> {
        const [code] = tuiTryParseMarkdownCodeBlock(
            await tuiRawLoad(import('./example.md?raw')),
        );

        this.control.patchValue(code);
    }
}
