import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
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
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample3 {
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
