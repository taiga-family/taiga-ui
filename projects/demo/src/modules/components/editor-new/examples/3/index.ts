import {Component, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_STYLES,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-editor-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import('@tiptap/starter-kit').then(m => m.default),
                import('@taiga-ui/addon-editor/extensions').then(m =>
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

    control = new FormControl(`
        <img data-type="image-editor" src="assets/images/lumberjack.png" width="300">
        <p>Try drag right border of image!</p>
    `);
}
