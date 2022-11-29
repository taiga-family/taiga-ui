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
                import(`@tiptap/extension-image`).then(({default: Image}) =>
                    Image.configure({inline: true, allowBase64: true}),
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
            `<img data-type="image-editor" src="/assets/images/lumberjack.png" width="300"><p>Try to drag right border of image!</p><p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p><p>To change max size of image use token <code>TUI_EDITOR_MAX_IMAGE_WIDTH</code>.</p><img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />`,
        );
    }
}
