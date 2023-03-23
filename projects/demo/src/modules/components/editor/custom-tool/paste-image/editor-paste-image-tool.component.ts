import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';

@Component({
    selector: 'editor-emoji-tool',
    templateUrl: './editor-paste-image-tool.component.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorPasteImageToolComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'image-tool/paste.extension.ts': import(
            './examples/1/image-tool/paste.extension.ts?raw'
        ),
        'image-tool/image-tool.component.ts': import(
            './examples/1/image-tool/image-tool.component.ts?raw'
        ),
        'image-tool/image-tool.template.html': import(
            './examples/1/image-tool/image-tool.template.html?raw'
        ),
        'image-tool/image-tool.styles.less': import(
            './examples/1/image-tool/image-tool.styles.less?raw'
        ),
        'image-tool/image-tool.module.ts': import(
            './examples/1/image-tool/image-tool.module.ts?raw'
        ),
    };
}
