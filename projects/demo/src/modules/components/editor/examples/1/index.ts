import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';

export async function importStarterKit(): Promise<unknown> {
    return (await import(`@taiga-ui/addon-editor/extensions/starter-kit`)).StarterKit;
}

export async function importEmojiExtension(): Promise<unknown> {
    return (await import(`./smiles-tool/emoji.extension`)).EmojiExtension;
}

@Component({
    selector: `tui-editor-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [importStarterKit(), importEmojiExtension()],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample1 {
    readonly builtInTools = [TuiEditorTool.Undo];
    readonly control = new FormControl(``, Validators.required);
}
