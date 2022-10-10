import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

@Component({
    selector: `tui-editor-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(
                    ({StarterKit}) => StarterKit,
                ),
                import(`./smiles-tool/emoji.extension`).then(
                    ({EmojiExtension}) => EmojiExtension,
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl(``, Validators.required);
}
