import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';

@Component({
    selector: 'editor-upload-files',
    templateUrl: './editor-upload-files.component.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorUploadFilesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        './filesio.service.ts': import('./examples/1/filesio.service.ts?raw'),
        './file-loader.ts': import('./examples/1/file-loader.ts?raw'),
    };
}
