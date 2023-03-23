import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';

@Component({
    selector: 'editor-resizable-images',
    templateUrl: './editor-resizable-images.component.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorResizableImagesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
