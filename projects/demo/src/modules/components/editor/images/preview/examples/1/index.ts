import {Component, Inject, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {TUI_IS_STACKBLITZ, TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-preview-images-example-1',
    templateUrl: './index.html',
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@taiga-ui/addon-editor/extensions/image-editor').then(
                    ({createImageEditorExtension}) =>
                        createImageEditorExtension(injector),
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorPreviewImagesExample1 {
    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';

    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    control = new FormControl('');

    constructor(@Inject(TUI_IS_STACKBLITZ) private readonly isStackblitz: boolean) {
        this.control.patchValue(
            `<p>Small image</p><img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="${this.relativePath}assets/images/big-wallpaper.jpg" width="500">`,
        );
    }
}
