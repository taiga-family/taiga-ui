import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_MAX_IMAGE_WIDTH,
    TUI_EDITOR_MIN_IMAGE_WIDTH,
    TUI_IMAGE_LOADER,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {imageLoader} from './image-loader';
import {ImgbbService} from './imgbb.service';

@Component({
    selector: `tui-editor-example-7`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(
                    ({StarterKit}) => StarterKit,
                ),
                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(
                    ({createImageEditorExtension}) =>
                        createImageEditorExtension(injector),
                ),
            ],
        },
        {
            provide: TUI_EDITOR_MIN_IMAGE_WIDTH,
            useValue: 150,
        },
        {
            provide: TUI_EDITOR_MAX_IMAGE_WIDTH,
            useValue: 400,
        },
        {
            provide: TUI_IMAGE_LOADER,
            useFactory: imageLoader,
            deps: [ImgbbService],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample7 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    control = new FormControl(``);

    constructor() {
        this.control.patchValue(
            `<img data-type="image-editor" src="/assets/images/lumberjack.png" width="300"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p>`,
        );
    }
}
