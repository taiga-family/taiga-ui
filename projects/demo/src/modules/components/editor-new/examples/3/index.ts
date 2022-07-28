import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_STYLES,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: `tui-editor-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(
                    m => m.StarterKit,
                ),
                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(m =>
                    m.createImageEditorExtension(injector),
                ),
            ],
        },
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample3 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    control = new FormControl(``);

    constructor() {
        this.control.patchValue(`
                <p>Small image</p>
                <img data-type="image-editor" src="assets/images/lumberjack.png" width="300">

                <p>Big image</p>
                <img data-type="image-editor" src="assets/images/big-wallpaper.jpg" width="500">
            `);
    }
}
